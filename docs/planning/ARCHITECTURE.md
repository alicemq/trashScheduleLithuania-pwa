# Architecture notes (PWA + push)

## Current (v1, serverless)

- **Frontend:** Vue 3, Vite. Address → containers → settings → feed URL + PDF.
- **Feed:** `public/feed.php` (or hosted at trash.teletigras.lt). Reads address + `w` (wasteObjectIds) from query; fetches contracts + schedules from grafikai.svara.lt; returns ICS.
- **No backend:** No user DB, no push.

## Target (PWA + push)

### Frontend

- Same Vue app + PWA manifest + service worker.
- After user sets address + containers + reminder (e.g. “1 day before, 18:00”): “Enable notifications” → `Notification.requestPermission()` → subscribe to push (PushManager) → send subscription JSON to our API.
- Optional: still show “Copy calendar link” for ICS subscribers.

### Backend (Cloudflare Worker)

- **Routes (example):**
  - `POST /api/subscribe` – body: `{ subscription, address, wasteObjectIds, reminderDays, reminderHour }`. Store in KV or D1 (keyed by subscription endpoint or a generated id).
  - `POST /api/unsubscribe` – remove subscription.
- **Cron (e.g. daily 06:00):** For each stored subscription, resolve address + wasteObjectIds → call grafikai.svara.lt (or cached schedule) → “collection tomorrow?”. If yes, send Web Push to `subscription.endpoint` with VAPID-signed request.
- **Storage:** D1 (recommended) for configs, addresses, push_subscriptions. See [STORAGE.md](STORAGE.md) for schema and flows. KV only if needed for caching.
- **Web Push:** Use Web Crypto in Worker to build encrypted payload; POST to subscription endpoint (FCM / Mozilla). Library: need one that works in Workers (no Node deps) or minimal custom (encrypt + sign).

### Data stored (see STORAGE.md)

- **configs:** config_key (long random, used for "restore"), tier (free | single | multi), paid_until.
- **addresses:** per config_key: address fields, wasteObjectIds, reminder_days, reminder_hour.
- **push_subscriptions:** per device: config_key, endpoint, p256dh, auth. Same config_key can have many rows (multiple devices).

### Security / privacy

- No login required for v1 push (anonymous subscription).
- Subscription endpoint is unique per browser; don’t store PII beyond address.
- VAPID: public key in frontend, private key in Worker secrets.

---

*Last updated: 2025-02*
