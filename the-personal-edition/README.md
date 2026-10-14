# The Personal Edition

Site personnel d'Enya, construit avec [Astro](https://astro.build), en palette « Marché ».

## Démarrer

```bash
npm install
npm run dev       # http://localhost:4321, avec rechargement automatique
npm run build     # génère le site statique dans dist/
npm run preview   # sert dist/ pour vérifier avant publication
```

Node 22.12 ou plus récent est nécessaire.

## Écrire un article

Chaque article est un fichier Markdown. Le dossier dans lequel il se trouve décide de sa rubrique :

| Dossier | Rubrique |
| --- | --- |
| `src/content/lab/` | The Lab |
| `src/content/magazine/` | The Magazine |
| `src/content/guide/` | The Tourist Guide |
| `src/content/index/` | The Index |

Copie `src/content/_template.md` dans le bon dossier et remplis l'en-tête. Le nom du fichier devient l'adresse de la page (`lab/mon-projet.md` donne `/lab/mon-projet/`). Les articles les plus récents passent en premier, et `featured: true` place un article en grand en haut de sa rubrique. Avec `draft: true`, l'article n'apparaît qu'avec `npm run dev`.

Les photos vont dans `public/images/` et se référencent dans l'en-tête avec `cover: "/images/ma-photo.jpg"`. Sans photo, une illustration dans la couleur de la rubrique s'affiche à la place.

Les 16 articles présents sont des exemples à remplacer.

## Où modifier quoi

- Couleurs et typographie : `src/styles/global.css` (les variables en haut du fichier)
- Textes des rubriques (intro, encadré, série) : `src/data/sections.ts`
- En-tête, navigation et pied de page : `src/layouts/Base.astro`
- Page d'accueil : `src/pages/index.astro`
- Gabarit de rubrique : `src/pages/[section]/index.astro`
- Gabarit d'article : `src/pages/[section]/[...slug].astro`
- Illustrations de remplacement : `src/components/Visual.astro`

## Mettre en ligne (GitHub Pages, gratuit)

1. Crée un dépôt GitHub et pousse ce dossier sur la branche `main`.
2. Dans le dépôt, va dans Settings > Pages et choisis « GitHub Actions » comme source.
3. Mets ton adresse dans `site` de `astro.config.mjs`. Si le dépôt ne s'appelle pas `<ton-nom>.github.io`, mets aussi `base: '/nom-du-depot'`.

Le fichier `.github/workflows/deploy.yml` republie le site à chaque push.
