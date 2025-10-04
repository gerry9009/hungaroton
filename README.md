# Hungaroton Artists

A Next.js alapú webalkalmazás, amely a Hungaroton művészeinek listázását és részletes megjelenítését teszi lehetővé.

## Technológiák

- **Next.js 14** - React keretrendszer SSR támogatással
- **TypeScript** - Típusos JavaScript fejlesztéshez
- **Material-UI (MUI)** - React komponens könyvtár
- **TanStack Query** - Szerver állapot kezelés és cache-elés
- **Axios** - HTTP kliens
- **ESLint** - Kód minőség ellenőrzés
- **Cypress** - E2E tesztelés

## Funkciók

- Művészek listázása lapozással (50 művész/oldal)
- Szűrési lehetőségek:
  - Keresés név alapján
  - Szűrés típus szerint (előadó, szerző, elsődleges)
  - Szűrés kezdőbetű szerint
- Művész részletes adatlapja
- Reszponzív design
- URL alapú szűrés (URLSearchParams)

## Telepítés és Futtatás

### Előfeltételek

- Node.js 18.x vagy újabb
- npm 9.x vagy újabb

### Telepítés

```bash
# Repository klónozása
git clone <repository-url>
cd hungaroton-artists

# Függőségek telepítése
npm install
```

### Fejlesztői Környezet

```bash
# Fejlesztői szerver indítása
npm run dev
```

A fejlesztői szerver alapértelmezetten a http://localhost:3000 címen érhető el.

### Build és Produkciós Környezet

```bash
# Produkciós build készítése
npm run build

# Produkciós szerver indítása
npm start
```

### Tesztek Futtatása

```bash
# E2E tesztek futtatása (Cypress)
npm run cypress:open   # Interaktív módban
npm run cypress:run    # Headless módban
```

## Projekt Struktúra

```
hungaroton-artists/
├── app/                    # Next.js alkalmazás gyökér
│   ├── (routes)/          # Oldal komponensek
│   │   ├── artists/       # Művészek listája
│   │   └── artists/[id]/  # Művész részletek
│   ├── components/        # Újrafelhasználható komponensek
│   ├── hooks/            # Egyedi React hook-ok
│   ├── lib/              # Utility és konfigurációs fájlok
│   └── services/         # API szolgáltatások
├── public/               # Statikus fájlok
└── cypress/             # E2E tesztek
```

## Komponens Struktúra

- **DynamicForm**: Dinamikus űrlap komponens különböző mezőtípusokkal
- **Layout**: Oldal elrendezés komponensek
  - BaseLayout
  - Header
  - Footer
- **List**: Lista megjelenítés komponensek
  - ListWrapper
  - ListItem
  - EmptyList
- **PaginationBar**: Lapozás komponens

## API Integráció

Az alkalmazás a Hungaroton API-t használja a művészek adatainak lekéréséhez. A kommunikáció az `apiClient.ts`-ben van konfigurálva, amely az Axios-t használja.

## Karbantartás és Fejlesztés

- A kód TypeScript-ben íródott szigorú típusellenőrzéssel
- ESLint szabályok biztosítják a kódminőséget
- Cypress tesztek ellenőrzik a funkcionalitást
- A komponensek újrafelhasználhatóak
