# TourAsia — Static Landing Page

A simple, responsive static landing page for a travel site called "TourAsia".  
This project separates styles and scripts into external files (style.css, script.js) and includes a booking modal and a searchable tours list.

## Files
- tourasia-website.html — Main HTML file (entry point).
- style.css — All page styles (placed next to the HTML).
- script.js — All interactive behavior (search, modal, rendering tours).
- README.md — This file.

## Quick start
1. Ensure the following files are together in the same directory:
   - tourasia-website.html
   - style.css
   - script.js
2. Open `tourasia-website.html` in a web browser (double-click or use `File → Open`).

No build tools or server are required for development; this is a static site.

## Usage
- Use the search box on the hero to filter tours by destination, date, or number of travelers.
- Click "Book Now" or a tour card to open the booking modal.
- Navigation links smooth-scroll to sections.

## Development notes
- To change tours data, edit the `allTours` array in `script.js`.
- CSS is in `style.css`; media queries handle responsive behavior.
- If you move files, update the `<link rel="stylesheet">` and `<script src="...">` paths in the HTML.

## Contributing
- Pull requests and issues are welcome.
- Keep the site static and lightweight; prefer vanilla HTML/CSS/JS.

## License
- No license specified — add a LICENSE file if you intend to publish under a specific license.
