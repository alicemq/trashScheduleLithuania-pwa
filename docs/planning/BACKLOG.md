# Backlog

Items to pick when implementing roadmap phases. Not ordered.

## PWA

- [ ] Add `vite-plugin-pwa` (or similar); configure manifest + workbox.
- [ ] Manifest: name, short_name, icons, start_url, display: standalone.
- [ ] Service worker: precache app shell; optional offline fallback.
- [ ] Test “Add to home screen” on Android and iOS.

## Push (frontend)

- [ ] Page to request notification permission after address + containers + reminder are set.
- [ ] Get PushManager subscription (VAPID public key from env or API).
- [ ] POST subscription + address + wasteObjectIds + reminder prefs to Worker `/api/subscribe`.
- [ ] Handle “already subscribed” / “permission denied”.
- [ ] Optional: “Unsubscribe” that calls `/api/unsubscribe`.

## Push (Worker)

- [ ] Create Worker project (e.g. in repo `worker/` or separate repo).
- [ ] D1 or KV binding; store subscription + prefs.
- [ ] Cron Trigger: daily run.
- [ ] In cron: list subscriptions; for each, resolve “collection tomorrow?” (call grafikai.svara.lt or use cached data).
- [ ] Web Push: implement or use library (VAPID sign + encrypt, fetch to endpoint).
- [ ] Send one push per subscription that has collection tomorrow; payload e.g. “Atliekos rytoj: Mišrios komunalinės”.

## Monetization (later)

- [ ] Decide product: freemium vs tip vs one-time.
- [ ] Add payment provider; “Upgrade” or “Support” entry point in UI.
- [ ] Optional: “Notify when schedule changes” (cron that diffs schedule and pushes).

---

*Last updated: 2025-02*
