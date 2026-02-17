# PWA version – roadmap

Base: serverless v1 (calendar feed + PDF, container selection). This repo is for the next version.

## Goals

- **Lower friction:** Push notifications from the app (no calendar subscription + reminder setup).
- **Monetization:** User-paid only (freemium / tip / premium features).
- **Single codebase:** PWA, no native Android/iOS apps.

## Phases

### 1. PWA shell

- [ ] Add PWA manifest + service worker (e.g. Vite PWA plugin).
- [ ] Install to home screen, offline shell.
- [ ] No push yet; keep current calendar + PDF flow.

### 2. Web Push backend

- [ ] Cloudflare Worker: store push subscriptions (KV or D1).
- [ ] Worker: cron (e.g. daily) → “who has collection tomorrow?” → send Web Push.
- [ ] Frontend: request permission, subscribe, send subscription to Worker.
- [ ] VAPID keys; Worker sends to FCM / Mozilla push endpoints.

### 3. Reminder flow in-app

- [ ] Settings: “Remind me 1 day before at 18:00” (already in UI).
- [ ] “Enable app notifications” → one prompt; reminders come from our push, not calendar.
- [ ] Optional: keep ICS for users who want events in Google/Outlook.

### 4. Monetization

- **Tiers:** Free (calendar only) | Single €3/year, 1 address, push | Multi: +€1/year per extra address. See [MONETIZATION.md](MONETIZATION.md).
- [ ] Payment: Stripe / Lemon Squeezy / etc.; Worker stores config_key + tier + paid_until.
- [ ] Config key (long random): export for "restore"; restore = fetch config + entitlement, allow adding push on new device.
- [ ] Optional: “Notify when schedule changes” (Worker + stored subscriptions).

---

*Last updated: 2025-02*
