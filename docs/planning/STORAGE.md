# Storing subscription information (Cloudflare Workers)

Serverless options on Cloudflare: **KV** (key–value), **D1** (SQLite). We need to store: config key → entitlement, address(es) + reminder per config, and one or more **push subscriptions** per config (one per device that “restored” or subscribed).

## Why D1 over KV here

- **Query pattern:** Cron must find “all subscriptions that have collection tomorrow” – i.e. iterate by config/address, then by push subscription. Easier with a small relational schema (D1) than with KV (where we’d need to list by prefix or store one big key per config and deserialise).
- **Consistency:** D1 is strongly consistent; KV is eventually consistent. For “add subscription” then “send push” within minutes, D1 avoids missing a just-added subscription.
- **Size:** Subscription JSON per device is small; total rows will be in the low thousands for a long time. D1 fits well.

So: **store subscription and config data in D1**. Use KV only if you later need a simple cache (e.g. schedule response from grafikai.svara.lt).

---

## D1 schema

### 1. `configs` (one row per config key = one “purchase” / restore identity)

| Column        | Type    | Description |
|---------------|---------|-------------|
| config_key    | TEXT PK | Long random (e.g. 32 bytes hex) or derived; user-facing “restore” token |
| tier          | TEXT    | `free` \| `single` \| `multi` |
| paid_until    | TEXT    | ISO date; after this, treat as free (no push) or hide in UI |
| created_at   | TEXT    | ISO datetime |
| updated_at   | TEXT    | ISO datetime |

- **Free** tier: still create a row so we have a config_key for “restore” and for storing one address + one push subscription (we can decide to allow one free push or not; if not, `tier=free` means “no push” and cron skips).

### 2. `addresses` (addresses under a config; for single = 1 row, for multi = 1 + N)

| Column          | Type    | Description |
|-----------------|---------|-------------|
| id              | INTEGER PK AUTOINCREMENT | — |
| config_key      | TEXT FK | References configs.config_key |
| municipality    | TEXT    | — |
| sub_district    | TEXT    | — |
| city            | TEXT    | — |
| street          | TEXT    | — |
| house_number    | TEXT    | — |
| waste_object_ids| TEXT    | JSON array of selected wasteObjectIds |
| reminder_days   | INTEGER | e.g. 1 = day before |
| reminder_hour   | INTEGER | 0–23 |
| created_at      | TEXT    | ISO datetime |

- Single: one row per config_key. Multi: multiple rows per config_key (capped by entitlement).

### 3. `push_subscriptions` (one row per device/browser that receives push for a config)

| Column       | Type    | Description |
|--------------|---------|-------------|
| id           | TEXT PK | e.g. random UUID or hash of endpoint |
| config_key   | TEXT FK | Which config this device is “restored” to |
| endpoint     | TEXT    | Push endpoint URL (unique per browser) |
| p256dh       | TEXT    | Client public key (from subscription) |
| auth         | TEXT    | Auth secret (from subscription) |
| created_at   | TEXT    | ISO datetime |

- One push subscription = one browser/device. Same config_key can have many rows (multiple devices). Cron: for each address with collection tomorrow, find all push_subscriptions for that address’s config_key and send one push per row.

**Alternative (normalised):** Store “which addresses does this push subscription care about?” in a join table `subscription_addresses (subscription_id, address_id)` so one device can have different reminder times per address. For v1, we can keep “one config = one set of addresses + one reminder” and “one config = many push_subscriptions”; then each subscription gets the same combined message for all addresses. So the schema above is enough.

---

## Flows

### Subscribe (enable notifications for current config)

1. Frontend has: address(es), wasteObjectIds, reminder (days, hour). User pays (or is free) → backend creates/updates `configs` and `addresses`; returns `config_key`.
2. User allows notifications; frontend gets PushManager subscription, sends to Worker `POST /api/subscribe` with `{ config_key, subscription }`.
3. Worker: upsert `config_key` in configs (if new), ensure address row(s) exist; insert into `push_subscriptions` (endpoint, keys, config_key). If endpoint already exists for this config_key, update keys.

### Restore (import config key)

1. User pastes config_key in app. Frontend calls `GET /api/config?key=...`.
2. Worker: read `configs` + `addresses` for that config_key. Return { tier, paid_until, addresses: [ { municipality, street, … }, … ] } (no push subscription, no secrets).
3. Frontend fills form; user can “Enable notifications” → same as Subscribe, adding a new row in `push_subscriptions` for this device.

### Cron (daily: who has collection tomorrow?)

1. Worker runs (e.g. 06:00). Query all rows from `addresses` (or only those whose config_key has tier in (single, multi) and paid_until >= today).
2. For each address, call grafikai.svara.lt (or cached schedule) to get “collection tomorrow?” for that address + wasteObjectIds.
3. For each address that has collection: get config_key → select all `push_subscriptions` for that config_key → for each, send one Web Push (e.g. “Atliekos rytoj: Mišrios, plastikas”).
4. (Optional) Batch or rate-limit FCM/Mozilla requests to avoid throttling.

### Unsubscribe

- Frontend calls `POST /api/unsubscribe` with `{ endpoint }` or `{ config_key, endpoint }`. Worker deletes the row from `push_subscriptions`.

---

## Config key format

- **Recommended:** Long random (e.g. 32 bytes) encoded as hex or base64url, generated server-side when the first address/subscription is saved. Stored in `configs.config_key` and returned to client; user copies for “restore”.
- **Alternative:** Derive from (e.g.) hash(config + secret) so the same config always yields the same key; then “restore” is idempotent. Simpler but config changes would change the key unless we include only “entitlement + address ids” in the hash.

---

## Summary

| What                         | Where in Workers |
|-----------------------------|-------------------|
| Config key → tier, paid_until | D1 `configs`     |
| Address(es) + reminder per config | D1 `addresses`   |
| Push subscription (endpoint + keys) per device | D1 `push_subscriptions` (keyed by config_key) |
| Cron: “collection tomorrow?” | Worker reads D1 + external API, then sends Web Push per subscription |

All subscription and config data lives in D1; no KV required for this. Use Workers secrets for VAPID private key and (if needed) API keys for grafikai.svara.lt.
