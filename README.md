# Sankara Mbaye — site officiel / official website

Site statique bilingue (FR/EN) conçu par DALAL TECHNOLOGIES. Hébergement : Netlify (publish = racine).

## Mettre à jour le contenu
Tout le contenu modifiable est dans `js/content.js` :
- `SITE_URL` — le domaine final (active canonical, hreflang, Open Graph).
- `DALAL_URL` — lien vers le site de Dalal Technologies (crédit en bas de page).
- `SOCIALS` — un réseau ne s'affiche que si `verified: true` et une `url`.
- `VIDEOS` — `{ type:"youtube", id:"...", category:"humour|famille|lives|societe|culture", featured:true, title:{fr,en} }`.
- `PRESS`, `GALLERY`, et les textes `T.fr` / `T.en`.

Formulaire : Netlify Forms (`contact`). Les messages arrivent dans Netlify → Forms.

Pourquoi pas Next.js : le site est une seule page, sans base de données ; une version statique se charge plus vite, n'a aucune étape de build, et peut être mise à jour depuis GitHub sans outillage. Elle peut migrer vers Next.js plus tard si un blog ou un espace admin est ajouté.
