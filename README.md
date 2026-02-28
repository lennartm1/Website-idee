# KleurSnoep (PWA)

Moderne, snelle en mobielvriendelijke snoepwinkel met 3 producten (blauw, groen, rood), dynamische productroutes, klantenservicepagina, winkelwagen en basis PWA-ondersteuning.

## Lokaal draaien

1. Installeer dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:4173`.

## Productroutes

- `/product/blauw`
- `/product/groen`
- `/product/rood`

## PWA / installeren als app

1. Draai de site lokaal of deploy deze.
2. Open de website in Chrome/Edge op mobiel of desktop.
3. Kies **Toevoegen aan beginscherm** of **Install app** vanuit het browsermenu.
4. De `manifest.webmanifest` en `sw.js` zorgen voor standalone app-modus en offline caching van Home + productpagina's.

## Build

```bash
npm run build
npm run preview
```
