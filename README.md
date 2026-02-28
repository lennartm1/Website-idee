# KleurSnoep Studio (React + Vite + PWA)

Premium, minimalistische sport/lifestyle storefront voor een snoepwinkel met:
- Home, Producten, Productdetail, Klantenservice
- Cart drawer (slide-in) + cart badge + optionele `/cart` pagina
- PWA ondersteuning (manifest + service worker)

## Lokaal draaien

1. Installeer dependencies
   ```bash
   npm install
   ```
2. Start dev server
   ```bash
   npm run dev
   ```
3. Open in browser
   - `http://localhost:4173`

## Routes

- `/`
- `/producten`
- `/product/blauw`
- `/product/groen`
- `/product/rood`
- `/klantenservice`
- `/cart`

## PWA / app installeren

1. Start de app lokaal of deploy.
2. Open in Chrome of Edge.
3. Kies **Install app** of **Toevoegen aan beginscherm**.
4. De app gebruikt `public/manifest.webmanifest` en `public/sw.js` voor standalone mode en offline caching.

## Cart UX

- Cart-icoon in header met badge (totaal aantal items).
- Rechts slide-in cart drawer met:
  - itemregels,
  - qty +/- controls,
  - verwijderen,
  - subtotaal,
  - checkout placeholder.
- Snel toevoegen vanaf productkaarten (Quick add) en productdetail.

## Build

```bash
npm run build
npm run preview
```
