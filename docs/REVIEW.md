# Review checklist

## Recorded checks — 23 September 2026

- Public demo homepage loaded and displayed the catalog, language controls, and cart interface.
- `node --check script.js` passed.
- No orders, messages, or forms were submitted.

These checks establish page availability and JavaScript syntax, not complete feature correctness.

## Manual checks for a future release

Run a local copy and use demonstration data. This list is a review plan; unchecked items are not claimed as completed.

- [ ] Switch between all four languages and inspect labels and text direction.
- [ ] Search for a known product, combine search with a filter, and check an empty result.
- [ ] Add, change, remove, and clear cart items.
- [ ] Reload and check local cart restoration.
- [ ] Inspect quantity bounds, missing prices, and the per-piece/grams discrepancy.
- [ ] Review the composed message and recipient before any real handoff.
- [ ] Verify keyboard navigation, focus visibility, image alternatives, and mobile overflow.
- [ ] Check the storage-failure behavior in a browser with local storage disabled.

Before any production claim, add behavioral tests for cart calculations and state restoration, settle the pricing-unit behavior, and validate actual business content and asset rights.
