# Ellenőrzés – 2026-11-03

Elkészült az index.html és a három önálló kezdőoldal-koncepció.
- A hivatkozott helyi képek és logók léteznek.
- A belső horgonyok és a koncepcióválasztó linkjei ellenőrizve.
- Minden koncepció egy H1-et és két demóűrlapot tartalmaz.
- A hat inline JavaScript blokk szintaxisellenőrzése sikeres.
- A submit kezelők preventDefault hívással tiltják az űrlapbeküldést; nincs backend.
- Mobil töréspontok, billentyűzetes fókusz és reduced-motion szabályok szerepelnek a kódban.
- A teljes CSS helyben, a HTML-ben van. A webfontok és a Tailwind CDN internetet igényelnek; CSS és rendszerfont tartalék rendelkezésre áll.

Korlát: böngészős vizuális és interakciós ellenőrzés nem történt. A böngésző eszköz a file URL megnyitását biztonsági szabállyal blokkolta, kerülőút használatát is tiltotta. Mobilmegjelenés és űrlapinterakciók futás közben nem ellenőrzöttek.

Megtekintés: a projekt index.html fájljának dupla kattintásos megnyitása, majd a három koncepció végiggörgetése. Ezek kezdőoldal-koncepciók; a menü az adott oldal szakaszaihoz vezet. A kiválasztott irányból külön munkalépésben készülhet a teljes négyoldalas demó.
