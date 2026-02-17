# Contract / Subscriber Selection at One Address

## Problem

One address (e.g. Dagilių g. 20) can have **multiple contracts** (subscribers) with **different schedules**. For example:

- **General waste (Mišrios komunalinės)** may appear twice with different containers and schedules:
  - MK-112227 0,14 — `scheduleIds: [1082, 1082, 1083, 1083]` (e.g. two pickups per cycle)
  - MK-172850 0,12 — `scheduleIds: [1083]` (e.g. one pickup per cycle)

If we only group by address, the user cannot choose which subscription(s) they want in their calendar.

## Recommended Identifier: `wasteObjectId`

| Identifier         | Stability / Use |
|--------------------|------------------|
| **wasteObjectId**  | **Recommended.** API key for schedule; one ID per container + schedule. Stable until the provider reassigns the object. |
| inventoryNumber    | Contract number (e.g. MK-112227). Can change on contract renewal; use for **display** and user recognition. |
| dumpsterId         | Physical container. May change if container is replaced. |
| scheduleId / scheduleIds | Identifies the schedule; tied to wasteObjectId in API. |

**Recommendation:** Use **wasteObjectId** as the stable key for “which schedule to include.” Use **inventoryNumber** and **descriptionFmt** + **containerFmt** + **frequency** for user-facing labels so the user can pick the right row(s).

## If Contract Number or Other IDs Change

- **inventoryNumber** may change when a contract is renewed or reissued. Do not use it as the only key for persistence or feed URLs.
- **wasteObjectId** is assigned by the provider; it may change if they merge/split objects or change systems. There is no guaranteed permanent ID; treat wasteObjectId as the best available key for the current API.
- For long-term links (e.g. saved feed), consider:
  - Storing the list of **wasteObjectIds** the user selected, and
  - Revalidating at feed generation time: if the API no longer returns a wasteObjectId, drop that series or show a “schedule no longer available” in the feed description.

## UI: How the User Picks Which Schedules to Include

1. **After address selection:** Show all contracts returned for that address (one row per contract / wasteObjectId).
2. **Display per row:** `descriptionFmt`, `containerFmt`, `frequency`, and optionally `inventoryNumber` (e.g. “MK-112227”) so users can distinguish “my general waste” from “other general waste” at the same address.
3. **Selection:**
   - **Option A (recommended):** Checkboxes per row; user selects which wasteObjectIds to include. Default: all selected.
   - **Option B:** One “primary” contract per waste type (e.g. one “Mišrios komunalinės”); user picks which one in a dropdown or list.
4. **Persistence:** When building the calendar or feed URL, pass only the selected **wasteObjectIds** (and address/reminder params). Server/client includes only those in the schedule requests and iCal output.

## Example: Same Address, Two General Waste Contracts

```text
Address: Dagilių g. 20

Contract 1 (wasteObjectId: 70572)
  Mišrios komunalinės — MK-112227 0,14 — kas 14 dienų [scheduleIds: 1082, 1082, 1083, 1083]

Contract 2 (wasteObjectId: 70571)
  Mišrios komunalinės — MK-172850 0,12 — kas 14 dienų [scheduleIds: 1083]
```

User sees two rows and can select one or both. Calendar/feed then includes only the selected wasteObjectIds.

## Feed URL / Backend

If the feed is generated server-side (e.g. `feed.php`), the URL must encode which contracts to include. Options:

- Add a parameter with selected **wasteObjectIds** (e.g. comma-separated or repeated `w=70572&w=70571`). Server fetches schedule only for those IDs.
- If the current API only supports address (street, house, region, etc.), the backend currently returns all contracts for that address; filtering by wasteObjectId would require the API to support it or the backend to fetch all contracts, filter by wasteObjectId, then fetch schedules only for selected IDs.

## Summary

- Use **wasteObjectId** to identify “which schedule” for selection and for avoiding duplication when multiple contracts exist at one address.
- Use **inventoryNumber** and **descriptionFmt** + **containerFmt** + **frequency** for display and user choice.
- Plan for **inventoryNumber** (and possibly wasteObjectId) to change over time; design feed/saved data to revalidate and degrade gracefully.
