# Bernard Cheese Shop Website Notes

Last updated: 2026-05-14

## Goal

Create a website for the cheese shop using the Facebook profile/page information and, later, the shop position/layout table that the user will provide.

## Source Links Provided

1. https://www.facebook.com/share/14bYTePVpTD/?mibextid=wwXIfr
2. https://www.facebook.com/share/14QrPHP86kZ/?mibextid=wwXIfr

## Confirmed From Link Redirects

The links resolve to these Facebook page/profile handles:

1. `https://www.facebook.com/bernard.la.fromagerie.nabeth`
2. `https://www.facebook.com/fromagerie.israel`

## Access Limitation

Facebook did not expose the profile/page content through unauthenticated access. The pages returned either blocked/error content or minimal redirect metadata, so I cannot safely extract business details, photos, posts, menu items, address, opening hours, phone numbers, reviews, or branding from the links alone.

This is a platform access/privacy limitation, not enough reliable content to use for final website copy.

## Information Needed From User

To build the website accurately, collect any of the following:

- Screenshots of the Facebook pages, especially the About section, cover image, profile photo, posts, reviews, and product photos.
- Copied text from the Facebook About section.
- Business name exactly as it should appear on the website.
- Address and map link.
- Phone number and WhatsApp number.
- Opening hours.
- Languages for the site: Hebrew, English, French, Arabic, or another combination.
- Product categories: cheeses, wine, deli, bakery, gift baskets, events, tastings, catering, delivery.
- Signature products or best sellers.
- Shop positioning table when ready.
- Any existing logo or preferred photos.

## Initial Website Direction

Working assumption: the site should present a premium local fromagerie with a warm, expert, trustworthy feel.

Language requirement:

- Hebrew is the default language shown on first visit.
- English is available from the language switcher.
- Russian is available from the language switcher.
- French is available from the language switcher.
- Product names stay as catalog/product names; surrounding interface, product descriptions, filters, counts, placeholders, and contact copy are translated.

Recommended first version:

- Homepage
- Product categories
- About / story
- Shop visit information
- Contact / WhatsApp order CTA
- Gallery
- Optional: catering, gift baskets, tasting events

## Draft Audience

- Local customers looking for quality cheese and specialty food.
- People planning hosting, events, gifts, or holiday meals.
- Food lovers looking for imported or artisanal products.

## Draft Primary CTA

Primary action: contact or order through WhatsApp.

Secondary actions:

- View products
- Get directions
- Call the shop
- Follow on Facebook

## Visual Direction

- Premium but approachable.
- Use real shop/product photography whenever available.
- Avoid generic stock imagery if the shop photos are available.
- Palette should feel food-focused and refined: off-white, deep green, warm neutral, dark charcoal, and subtle gold or burgundy accents.
- Layout should make products easy to scan and make contact details obvious on mobile.

## Notes For Later Build

When the user sends the shop positioning table, use it to define:

- Brand promise
- Differentiators
- Target customers
- Tone of voice
- Homepage headline and supporting copy
- Product category order
- Trust signals
- CTA wording
- Visual hierarchy

## Catalog Imported From PDF

Source file: `/Users/coconut/Downloads/cheese_catalog_v2_real_photos.pdf`

Imported into first website version:

- 42 cheese catalog entries
- Prices exactly as visible in the PDF where available
- Product photos extracted from the PDF and saved under `assets/products/`
- PDF placeholder images were not used on the website for missing product photos

Known catalog gaps:

- `Mini Goat Cheese` has no visible price in the PDF extraction, so the website displays `Ask in shop`.
- `Edam`, `Gouda`, `Goat Gouda`, `Gouda with Cumin`, `Gouda with Truffle`, and `Mascarpone` used placeholder images in the PDF, so the website shows a clean photo placeholder for those items.
- The website includes a `Missing photos` filter so these six products can be reviewed quickly.
