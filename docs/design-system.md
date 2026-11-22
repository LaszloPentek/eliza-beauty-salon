# Eliza Beauty Salon – design system

Verzió: 1.0 · Rögzítve: 2026-11-04 · Alap: a felhasználó által kiválasztott public/index.html.
Ez a további oldalak kötelező tervezési alapja. Felváltja a korábbi opcionális arculati javaslatot.

## 1. Kiválasztott irány és karakter

Az 1-es „Csendes énidő” a meghatározó, különösen a fejléc és a nyitó szakasz. A 2-esből a fotós Eliza-bemutatkozás és a „Tudd, mire számíthatsz” folyamatblokk került át.

A karakter nőies, nyugodt, személyes, világos és elegáns. Elsődleges közönség: 35 év feletti, bőrfiatalítást kereső nők. A látványt nagy fotók, levegős tartalom, finom talpas címsorok és visszafogott rózsafa hangsúlyok adják. A fő cselekvés: „Időpontot kérek”.

Kerülendő: neon, erős színátmenet, túl sok árnyék, csillogás, állandó mozgás, azonos kártyákból álló teljes oldal, új fontcsaládok és önkényes márkaszínek.

## 2. Színek

| CSS-változó | Név           | Érték   | Használat                                    |
| ----------- | ------------- | ------- | -------------------------------------------- |
| --rose      | Rózsafa       | #8E4A5A | Elsődleges gomb, link, hangsúlyos szakasz    |
| --deep      | Sötét rózsafa | #6E3644 | Gomb hover                                   |
| --cream     | Krém          | #FAF6F2 | Oldalháttér, kiemelt szakasz világos szövege |
| --powder    | Púder         | #F1E6DF | GYIK, kapcsolat, alternáló felület           |
| --ink       | Sötét kakaó   | #2E2626 | Cím és törzsszöveg                           |
| --muted     | Szürkésbarna  | #6B5F5C | Kísérőszöveg és címke                        |
| --line      | Halvány púder | #E3D6CF | Elválasztó, mezőkeret                        |
| --gold      | Homokarany    | #C9A27E | Dekoratív ág, levél és finom részletek       |
| –           | Fehér         | #FFFFFF | Űrlapfelület és elsődleges gombfelirat       |

Homokarany világos felületen nem használható érdemi szöveghez. A halvány mezőkeret mellett mindig legyen szöveges címke és jól látható fókusz. A rózsafa blokkok között világos szakasz legyen; a folyamat és a vendégvélemények ne olvadjanak egyetlen színes tömbbe.

## 3. Tipográfia

Címsor: Cormorant Garamond 500/600; tartalék Georgia, serif. Törzs és kezelőelemek: Jost 400/500; tartalék Arial, sans-serif. Magyar karakterkészlet: áéíóöőúüű és nagybetűs párjaik.

Az alábbi értékek a kiválasztott kezdőoldal tényleges CSS-éből származnak:

| Elem         | Méret                    | Vastagság | Sormagasság / megjegyzés              |
| ------------ | ------------------------ | --------- | ------------------------------------- |
| H1           | clamp(40px, 4.7vw, 64px) | 500       | 1.1; -0.025em betűköz                 |
| H2           | clamp(32px, 3.4vw, 44px) | 500       | 1.1; -0.018em                         |
| H3           | 28px; mobilon 24px       | 600       | 1.1                                   |
| Törzs        | 18px; mobilon 16px       | 400       | 1.65                                  |
| Kis szöveg   | 15px                     | 400       | Örökölt sormagasság                   |
| Kicker       | 13px; mobilon 12px       | 500       | Nagybetű, 0.1em; csak indokolt helyen |
| Gomb         | 14px                     | 500       | 1.3; nagybetű, 0.06em                 |
| Vélemény     | 27px; mobilon 25px       | 500       | Cormorant, 1.4                        |
| Szakmai adat | 40px                     | 600       | Cormorant, 1.1                        |
| Folyamatcím  | 25px; mobilon 23px       | 600       | Rövid, jól tördelhető                 |

Oldalanként egy H1; a szakaszok H2-k, részeik H3-ak. A cím szintjét ne a kívánt vizuális méret alapján válaszd. A főoldali kézi sortöréseket csak ott tartsd meg, ahol keskeny képernyőn is értelmesek.

## 4. Térköz és elrendezés

- Alapritmus: 8, 16, 24, 32, 40, 48, 64, 80, 96, 112 px.
- Tartalom: maximum 1200 px. Asztali oldalmargó legalább 40 px; 700 px alatt 20 px.
- Szakaszok: 112 px függőleges padding, 700 px alatt 64 px.
- Folyó szöveg: lehetőleg 45–75 karakteres sorok, hosszú leírás legfeljebb 680 px széles.
- Képek: 16 px lekerekítés. Űrlapok: 12 px. Gombok: kapszula, 99 px vagy nagyobb sugár.
- Árnyék: általában nincs. A hero krém panelének kitöltő árnyéka kompozíciós elem, nem lebegő kártyahatás.

### Töréspontok

| Tartomány        | Elrendezés                                                                    |
| ---------------- | ----------------------------------------------------------------------------- |
| 1000 px fölött   | Teljes fejléc-CTA, tágas kétoszlopos blokkok, négylépéses folyamat egy sorban |
| 701–1000 px      | Szűkebb oszlopközök; fejléc-CTA rejtett; folyamat két oszlop                  |
| 700 px és alatta | Mobilmenü; 20 px margó; tartalmi blokkok egy oszlopban; 64 px szakaszpadding  |
| 420 px és alatta | Folyamat egy oszlop; a szám a szöveg mellé kerül                              |

## 5. Komponensek

### Fejléc és navigáció

- Krém, sticky fejléc; asztali magasság 104 px, mobilon 80 px.
- Logó: public/logo/logo.svg; asztali doboz 138×76 px, mobilon 112×64 px; object-fit: contain.
- Asztalon szöveges menü; mobilon „Menü” / „Bezárás” gomb, aria-expanded és aria-controls.
- Menülink választására és Escape-re a mobilmenü bezárul.
- Görgetéskor finom alsó elválasztó jelenik meg.
- Aloldalakon a menüpontok tényleges oldalra vezessenek, az aktív oldal aria-current="page" jelölést kapjon. Ez az aloldalak elkészítésekor megvalósítandó szabály.

### Nyitó szakasz

- Az 1-esből megtartott széles kezelési kép és bal oldali krém szövegpanel.
- Maximum 1440 px külső szélesség; asztalon minimum 660 px magas.
- Szövegpanel maximum 536 px; a fotó fókusza 72% 50%.
- H1: „Egy kis énidő. Személyes törődés a bőrödnek.”
- Elsődleges CTA: „Időpontot kérek”; másodlagos, aláhúzott szöveges link: „Megnézem a kezeléseket”.
- Mobilon 300 px magas kép, alatta 40 px-rel ráfedő krém panel. Az aloldalak rövidebb bevezetőt kapjanak, ne ismételjék mindenhol a főoldal nagy hero-ját.

### Gombok és linkek

- Elsődleges: rózsafa / fehér; 16×28 px padding, minimum 52 px magas; hover sötét rózsafa; 250 ms színátmenet.
- Másodlagos körvonalas: átlátszó háttér, 1 px rózsafa keret; hover púder.
- Szöveges link: rózsafa, 1 px alsó vonal, 5 px alsó padding.
- Billentyűzetes fókusz: 2 px rózsafa körvonal, 5 px eltartás; sötét felületen világos fókusz legyen.
- Új disabled állapot esetén legyen felismerhető, ne csak szín jelölje; a prototípusban jelenleg nincs ilyen komponens.

### Kezelések

- Világos háttér, bal oldali hangulatkép, jobb oldali kezelési sorok.
- Soronként cím, időtartam/célcsoport, rövid szöveg és cselekvés; finom elválasztó.
- Mobilon a kép után következnek a kezelések.
- Kezelési csomagoknál az árak és tartalom kizárólag a szovegek.md alapján használhatók; önkényes kedvezmény vagy címke nem adható hozzá.

### Fotós bemutatkozás – a 2-esből

- selected-about-grid: 0.85fr / 1.15fr, 80 px köz, függőlegesen középre rendezve.
- Fotó: 480 px magas, 16 px sarok; mobilon 320 px magas.
- Jobbra bemutatkozás, „14 év” / „2019” adatok, „Így dolgozunk együtt” hivatkozás.
- 1000 px alatt 40 px köz; mobilon egy oszlop, 32 px köz.
- A fotó illusztrációs felirata megmarad, nem nevezhető Eliza portréjának.

### Folyamat – a 2-esből

- selected-process: rózsafa háttér, krém szöveg.
- Balra cím, jobbra rövid bevezető; alatta négy lépés.
- Szám: Cormorant 600, 48 px; mobilon 40 px, 420 px alatt 32 px.
- 4 → 2 → 1 oszlop, a fenti töréspontok szerint.
- A számozás csak tényleges sorrendet jelöl; szolgáltatásokhoz nem díszként használjuk.

### Előnyök és vélemények

- Előnyök: három világos, keret nélküli oszlop; 36 px vonalas ikon, rövid cím és szöveg; mobilon egymás alatt.
- Vélemények: rózsafa háttér, két nagy talpas idézet; mobilon egy oszlop.
- Csak a kapott Fruzsi- és Magdi-idézetek; nincs kitalált csillagozás vagy értékelési darabszám.

### GYIK

- Púder háttér, bal oldali cím, jobb oldali natív details/summary elemek.
- 24 px sorpadding, finom elválasztó, +/− nyitásjelző.
- Billentyűzettel kezelhető; válasz 16 px, másodlagos szövegszín.

### Űrlap és visszajelzés

- Látható label, hozzá kötött id; helykitöltő nem pótolja a címkét.
- Fehér mező, halvány keret, 12 px sugár; 13×16 px padding; rózsafa fókusz.
- E-mail mező type=email; megfelelő autocomplete; kötelező mezők required jelöléssel.
- A demó helyben ellenőriz, nem küld adatot. A státusz role=status / aria-live=polite.
- A beküldés eredménye egyértelműen jelzi: nem történt foglalás/feliratkozás.
- Éles bekötéskor külön szükséges a küldés közbeni, sikeres és hibás állapot; ezek jelenleg nincsenek megvalósítva.

### Lábléc

- A kiválasztott változat szerint világos krém, három tartalmi oszlop; mobilon a márkablokk teljes szélességű.
- Elérhetőségek, navigáció, alsó jogi sor és adatkezelési tájékoztatás.
- A korábbi opcionális sötét lábléc helyett ez a világos megoldás az alap.

## 6. Képek, logók és motívumok

- Használatban: public/images/treatment.webp (1600 px), spa.webp (1000 px), valamint 640 px-es mobilpárjaik, srcset/sizes megadással.
- Hero: fetchpriority=high; alsó képek: loading=lazy. Új képekhez valós képarányhoz tartozó width/height vagy stabil CSS képdoboz kell.
- Alt: konkrét képtartalom; illusztratív stocknál ezt jelezze. Díszítő elem alt="" vagy aria-hidden="true".
- Logó és favicon SVG; a fehér logó munkaforrásként a logo/logo-feher.svg útvonalon maradt. Sötét felületre csak szükség esetén kerüljön be a public mappába.
- Visszatérő motívum: finom homokarany ág és egyszerű levélkontúr. Nem szükséges minden cím fölé dísz.
- Képforrások: images/FORRASOK.md.

## 7. Mozgás és hozzáférhetőség

- A hero egyszeri, 0.9 s ease-out megjelenése; legfeljebb 12 px elmozdulás.
- Gombokon visszafogott színváltás; nincs állandó lebegés vagy parallax.
- prefers-reduced-motion: animáció és átmenet kikapcsolása, automatikus görgetés.
- Látható fókusz, tartalomra ugró link, szemantikus navigáció, címkézett mezők.
- Következő oldalak ellenőrzési méretei: 375, 420, 700, 1000 és 1440 px. Nincs horizontális kilógás, levágott szöveg vagy egymást fedő kezelőelem.
- Ezek a vizuális ellenőrzések követelmények; ebben a dokumentálási körben nem történt új böngészős teszt.

## 8. Aloldalak felépítése

| Oldal       | Átveendő komponensek                            | Saját tartalom                                                            |
| ----------- | ----------------------------------------------- | ------------------------------------------------------------------------- |
| Kezelések   | Fejléc, kezelési sorok, folyamat, űrlap, lábléc | Belico, Mesotica, további kezelések, forrás szerinti csomagok és garancia |
| Rólunk      | Fotós bemutatkozás, előnyök, CTA, lábléc        | Eliza története, szakmai mérföldkövek, értékek                            |
| Kapcsolat   | Rövid bevezető, űrlap, GYIK, lábléc             | Elérhetőségek, nyitvatartás; egyetlen űrlap                               |
| Adatkezelés | Fejléc, keskeny szövegoszlop, lábléc            | A demóműködés pontos leírása                                              |

A közös komponensek azonos színeket, térközöket és viselkedést kapjanak minden oldalon. Az aloldalak nem készültek el ebben a feladatban.

## 9. Forrás és karbantartás

- Normatív dokumentum: design-system.md.
- Géppel olvasható tokenek: .webprojekt/design-tokens.json.
- Megjelenés referenciája: public/index.html.
- Korábbi választási döntések: .webprojekt/kivalasztott-design.md.
- Közös CSS/JS későbbi kiemelésekor először az azonos megjelenést kell megőrizni. Az örökölt, már nem használt prototípus-osztályok nem újrafelhasználandó komponensek.
- A dokumentáció munkafájl, nem kerül a public mappába.
