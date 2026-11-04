# PageSpeed optimalizálás

Kiinduló mobilos jelentés: https://pagespeed.web.dev/analysis/https-eliza-beauty-salon1-netlify-app/s3dryai7cn?form_factor=mobile

- Performance 93, accessibility/best practices/SEO 100.
- FCP 1,5 s; LCP 2,9 s; Speed Index 4,1 s; TBT 0 ms; CLS 0.
- A Google Fonts CSS 750 ms renderblokkolást jelzett. A két betűcsalád WOFF2 formában a public/fonts mappába került, latin és latin-ext részhalmazzal (ő/ű támogatás), eredeti OFL licencekkel.
- A kis közös CSS beágyazva szerepel mind az öt HTML-ben. Szerkesztendő forrás: public/assets/site.css. Módosítás után futtasd: python tools/sync-styles.py.
- Reszponzív képméretek: treatment 480/800/1200/1600, spa 400/640/800/1000; WebP quality 76. Az eredeti fotók változatlanul az images mappában vannak.
- Minden kép kapott width/height attribútumot. A fő kép eager/high prioritású; az oldal alatti képek lazy betöltésűek.
- A fő szöveg megjelenését késleltető belépőanimáció megszűnt.
- A 11 KiB cache-figyelmeztetés a Netlify /.netlify/scripts/hud szolgáltatásához tartozik, nem a saját statikus fájlokhoz.

A betűtípusokat a fonts.googleapis.com CSS és fonts.gstatic.com szolgáltatta. A licencek a google/fonts hivatalos tárolójából származnak.

## Éles visszamérés

Új jelentés: https://pagespeed.web.dev/analysis/https-eliza-beauty-salon1-netlify-app/dc9hwomp0r?form_factor=mobile

2026-11-04 23:23 CET, Lighthouse 13.6, Moto G Power, lassú 4G:
- Performance: 99 (előtte 93).
- Accessibility / best practices / SEO: 100 / 100 / 100.
- FCP: 0,9 s (előtte 1,5 s).
- LCP: 1,6 s (előtte 2,9 s).
- Speed Index: 2,6 s (előtte 4,1 s).
- TBT: 0 ms; CLS: 0,001.

A renderblokkoló kérések, túlméretezett képek és hiányzó képméretek jelzése eltűnt. A Netlify HUD 11 KiB gyorsítótár-jelzése megmaradt.

Mind az öt oldal helyi hivatkozás-, képméret/srcset-, H1-, JSON-LD- és CSS-szinkronellenőrzése sikeres. A JavaScript szintaxisellenőrzése sikeres. Az éles főoldal 390 px szélességen nem lóg túl; a menü nyitása és Escape-pel zárása működik. A mobilos böngésző a treatment-perf-480.webp képet választotta. A Google OFL licencek eredeti záró szóközei diff-check figyelmeztetést adnak; a licencszöveget változatlanul megőriztük.
