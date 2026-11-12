# Bauchi State Chapter — Public Website

A responsive public-facing homepage built with HTML, CSS and vanilla JavaScript.

## Run locally
You can open `index.html` directly in a browser, or run the folder through a local development server.

For example, with Python installed:
```bash
python -m http.server 5500
```
Then visit `http://localhost:5500`.

## Project structure
- `index.html` — homepage markup
- `css/style.css` — all custom styles and responsive layouts
- `js/lga-data.js` — source-aligned LGA, ward-count and senatorial district data
- `js/main.js` — responsive navigation and page interactions
- `assets/logo/` — generated chapter emblem

## LGA directory
The homepage displays all 20 LGAs in static cards grouped by their senatorial districts. The interactive map and its external boundary/tile dependencies have been removed.

## Important data notes
- Membership counts are deliberately blank (`null`) until the organisation supplies verified aggregate membership figures.
- The estimated Christian population figures from the supplied source document are not displayed as membership or political support figures.
- LGA names, headquarters and ward counts are populated from the supplied source document.
- Before launch, verify administrative names and boundaries with an authoritative source and review the logo wording/artwork.

## Data sources
- Organisation content: client-provided website content document.

## Expandable LGA directory

The three senatorial district sections render their LGA cards from `js/lga-data.js` using `js/lga-directory.js`. Each card can be expanded to show its headquarters, senatorial district, ward count, estimated Christian population, brief history, ward list and welcome line. Multiple cards can remain open at the same time. Population figures are labelled as estimates and should be verified before publication.
