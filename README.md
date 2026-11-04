# Eliza Beauty Salon

Statikus, magyar nyelvű weboldal-demó és három kezdőoldal-koncepció.

## Megtekintés

- `index.html`: az új weboldal belépési pontja; a public/index.html oldalra vezet.
- `koncepciok.html`: a korábbi koncepcióválasztó.
- `public/index.html`: a kiválasztott, összeállított kezdőoldal.
- `koncepcio-1-csendes-enido.html`: az első koncepció.
- `koncepcio-2-szakerto-kezekben.html`: a második koncepció.
- `koncepcio-3-eliza-szepsegnaploja.html`: a harmadik koncepció.

A fájlok böngészőben közvetlenül megnyithatók. Nincs telepítési vagy build lépés. A Google Fonts és a Tailwind CDN internetkapcsolatot használ; a HTML-fájlok teljes helyi CSS-t és tartalék betűtípusokat is tartalmaznak.

## Kiválasztott irány

Az első koncepció az alap, különösen a nyitóképernyő. A másodikból a fotós Eliza-bemutatkozás és a „Tudd, mire számíthatsz” folyamatblokk került át.

## Projektanyagok

- `.webprojekt/`: brief, tervezési döntések, állapot és ellenőrzési jegyzetek.
- `design-system.md`: arculati alapok.
- `szovegek.md`, `eliza-jegyzet.md`: kapott tartalom és ügyféljegyzet.
- `logo/`: logók és faviconok.
- `images/`: illusztratív stock képek; források az `images/FORRASOK.md` fájlban.

## Demó és ellenőrzés

Az űrlapok nem küldenek adatot, nem foglalnak időpontot és nem iratkoztatnak fel hírlevélre. A kapcsolati adatok bemutató adatok; a képek illusztrációk. Elkészült a Főoldal, Kezelések, Rólunk, Kapcsolat és Adatkezelés demóoldal.

A fájl- és horgonyhivatkozásokat, valamint az inline JavaScript szintaxisát ellenőriztük. Böngészős vizuális és interakciós ellenőrzés nem történt a munkakörnyezet biztonsági korlátozása miatt.

A GitHub-repó privát forrásmentés; nem jelent weboldal-publikálást.

## Publikálási mappa

A hosting publish directory beállítása: `public`. Ebben csak az öt demóoldal, a közös CSS/JS, a SEO-fájlok, a WebP-képek és a használt SVG-logók találhatók. A projekt gyökerét ne publikáld. A képek 640 px-es mobilváltozatot is kaptak. Az eredeti JPG-k és a tervezési anyagok a publish mappán kívül maradtak.

## Aloldalak

public/kezelesek.html, public/rolunk.html, public/kapcsolat.html, public/adatkezeles.html. Közös stílus és működés: public/assets/site.css, public/assets/site.js. Minden oldal saját címet, leírást és canonical URL-t kapott; sitemap frissítve.
