# Bernard

### A four-language cheese catalog with a WhatsApp order handoff.

Browse products, search by name or style, filter the catalog, and compose a cart in the browser. The final action prepares a WhatsApp message for the visitor to send.

**HTML · CSS · JavaScript · Hebrew / English / French / Russian**

[View the demo](https://bernard-gamma.vercel.app) · [Architecture & tradeoffs](docs/ARCHITECTURE.md) · [Review checklist](docs/REVIEW.md)

## At a glance

| Area | Implementation |
| --- | --- |
| Catalog | 42 product entries with images, styles, tags, and listed prices |
| Discovery | Text search and category filters |
| Languages | Four interface dictionaries, including Hebrew RTL presentation |
| Cart | Quantity controls, estimated totals, and browser-local persistence |
| Handoff | A prepared WhatsApp message; no payment processor or server-side checkout |
| Runtime | Static assets; no build step or package installation |

## Run locally

```bash
git clone https://github.com/Duqamaqa/bernard.git
cd bernard
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173`. You can inspect the catalog and cart without contacting the business. The WhatsApp link points to the configured recipient; do not send test orders.

## Source map

```text
index.html       Page structure and interface elements
styles.css       Layout, responsive styling, and visual presentation
script.js        Product data, translations, search, cart, and handoff
assets/          Product photography and brand assets
docs/            Architecture notes and review checklist
```

The implementation keeps data and UI logic together in one JavaScript file. This makes the small static site easy to run and inspect, while increasing the editing and testing burden as the catalog grows. [Read the tradeoffs](docs/ARCHITECTURE.md).

## Project status

An AI-assisted portfolio prototype, developed with extensive AI assistance and not currently in active personal use. The public demo is available for inspection; this repository does not claim an active client engagement, verified sales, or production support.

## Known limitations

- Product availability and prices are static data, not a live inventory feed.
- The cart is stored in this browser's `localStorage`; it does not sync between devices.
- Most prices are estimated from grams. Two entries are marked per-piece while the interface still uses gram controls. Treat totals as illustrative, not an authoritative checkout quote.
- The order message is composed in Hebrew even when another interface language is selected.
- There is no server-side order validation, payment processing, or delivery tracking.
- There is no automated behavioral test suite. A JavaScript syntax check is documented separately from manual review.

See the [review checklist](docs/REVIEW.md) before making stronger claims about functionality or accessibility. Product and brand assets are included for this demonstration; their presence is not a grant of reuse rights.
