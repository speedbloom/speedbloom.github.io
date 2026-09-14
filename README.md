# Speedbloom Motors

Static site for an independent used-car dealership. Single self-contained
`index.html` — vehicle photos are embedded as data URIs, so there are no
external asset requests and no build step.

## Editing

`template.html` (not committed) holds the markup with `{{IMG_*}}` placeholders.
Rebuild `index.html` by substituting the base64 images back in. Source photos
are placeholders from Wikimedia Commons; see the credit line in the footer.

## Before going live for a real dealership

- Remove the template banner at the top of `index.html`
- Remove the final paragraph of the footer
- Fill in the "Dealer details go here" block: address, phone, email,
  NJ dealer licence number, map embed
