# Működő próbaűrlap

Fogadó: eliza-beauty@freemail.hu. Adatkezelő: Péntek László (felhasználó megerősítette).
Netlify Forms: idopontkeres; mind a négy oldalon azonos mezők. Natív POST és JavaScriptes hibakezelés; honeypot; kötelező, nem előjelölt hozzájárulás. Kisokos továbbra is demo.
A Netlify Forms felismerése engedélyezve, az idopontkeres űrlap megjelent. Az értesítési cím beállítva. 2026-11-15: az élő mobilos űrlapon elküldött ELIZA-20261115-01 próbára az oldal sikeres beküldést jelzett. A címzett megerősítette: „Megérkezett”. Az űrlap beküldése és e-mailes kézbesítése igazolt.

## Megőrzés – üzemeltetői feladat
A tájékoztató szerint a próbaüzenetek legfeljebb 30 napig tarthatók meg. A Netlify-ben és a Freemailben lévő példányokat az üzemeltetőnek törölnie kell; automatikus törlési feladat nincs bekötve. Visszavonás/törlési kérelem esetén korábbi törlés szükséges.

## Sablon és ellenőrzött források
- https://docs.google.com/document/d/1-fF0Wk8KX0lFq1I9xwvn2D1O9di33E0IBRMfTVE8JkA/edit
- https://www.netlify.com/privacy/
- https://www.netlify.com/pdf/netlify-dpa.pdf/
- https://accounts.freemail.hu/a/privacy
- https://www.naih.hu/ugyfelszolgalat-kapcsolat

A sablonból a nem alkalmazott Analytics/Meta sütik, regisztráció, nyereményjáték és marketing részek helyett a valós működés leírása került az oldalra. NAIH-cím frissítve; a nemzetközi adattovábbítás kizárására vonatkozó sablonmondat nem alkalmazható Netlify-re. Nem jogi megfelelőségi tanúsítvány.

## Záró ellenőrzés – 2026-11-15
Hat HTML-oldal helyi szerkezet-, hivatkozás-, CSS-, képalt- és űrlapellenőrzése sikeres. A JavaScript sikeres/hibás beküldési és ismételt küldést megelőző tesztje sikeres. A hat éles HTML szöveges tartalma, valamint a site.js, robots.txt és sitemap.xml egyezik a helyi változattal; Netlify a linkeket és az űrlap-attribútumokat átírja.
Mobilos böngészőellenőrzés 320 és 390 px szélességen történt. Saját fizikai telefonos végső ellenőrzés a felhasználó feladata. Új PageSpeed-mérés nem történt; korábbi ellenőrzött eredmény 99 pont. A Figma-összehasonlítás időadatai: kb. 10 óra Figma, 7–8 óra AI.
