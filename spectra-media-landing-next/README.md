# Spectra Media Landing — Next.js 14

Ce dépôt contient une landing page Next.js pour la marque Spectra Media ainsi que quelques articles de blog. Il comprend :

- Une page d’accueil présentant la flotte **Betty Bot**, l’outil prédictif **InnovationPulse** et une application macOS pour trier les factures ;
- Cinq articles de blog écrits en JSX pur (pas de `dangerouslySetInnerHTML`), dans `app/(site)/blog/…` ;
- Un favicon coloré dans `public/favicon.png` et des métadonnées SEO de base ;
- Un fichier `robots.ts` et `sitemap.ts` pour l’indexation Google.

## Installation

```bash
pnpm install  # ou npm install / yarn install
npm run dev   # lance le serveur de développement sur http://localhost:3000
npm run build # construit l’application pour la production
```

## Déploiement

Déployez ce projet sur Vercel en l’important depuis GitHub. Ajoutez votre domaine via les paramètres du projet et pointez vos DNS vers les serveurs Vercel. Le fichier `robots.ts` expose le sitemap à `https://votredomaine/sitemap.xml`.

## Personnalisation

- Remplacez `public/favicon.png` par votre propre icône si nécessaire. Veillez à garder un format carré (512×512 recommandé).
- Mettez à jour les liens dans `app/page.tsx` pour pointer vers vos services réels.
- Ajoutez de nouveaux articles dans `app/(site)/blog` en suivant la structure des fichiers existants.