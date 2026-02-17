# Monetization

## Tiers

| Tier   | Price        | Push notifications | Addresses | Else (webcal, ICS, PDF) |
|--------|--------------|--------------------|-----------|--------------------------|
| Free   | €0           | No                 | —         | Yes (same as now)        |
| Single | €3/year      | Yes, at chosen time | 1         | Yes                      |
| Multi  | Single + €1/extra address/year | Yes | 1 + N extra | Yes   |

- **Free:** No PWA push. Calendar generation only: webcal, ICS, PDF (current behaviour).
- **Single:** One address; notifications at user-selected time (stored per PWA instance / per config).
- **Multi:** Single plus paid slots for additional addresses; same notification rules per address.

## Config key and restore

- Notification times (and address, containers, reminder days/hour) are stored **per PWA instance** (client-side by default).
- User can export a **config key** – a long random (e.g. 32+ bytes) or derived value (e.g. SHA of config + salt), used as a shareable/restore token.
- **Restore:** Another user (or same user on another device) enters the config key in the app (“Restore” / “Import”). App fetches config + entitlement for that key from the backend:
  - Returns: address(es), containers, reminder settings, and tier (single/multi) so the app can show the right UI and allow adding a **new** push subscription for this device.
- So the config key identifies an “account” or “purchase”: it holds entitlement and the list of address configs; each device that “restores” adds its own push subscription linked to that key.

## Entitlement and payment

- **Single:** One config key per purchase; one address; paid_until (e.g. 1 year).
- **Multi:** Same config key; multiple addresses; paid_until; “address_slots” or per-address expiry.
- Payment provider (Stripe / Lemon Squeezy / etc.) issues the purchase; Worker stores `config_key` + `tier` + `paid_until` (and optionally payment_id). No need to store card details in our backend.

---

*Last updated: 2025-02*
