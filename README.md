# DidliDoo


# Documentation du projet

## Structure du projet

Ce projet suit une organisation claire pour séparer les différentes responsabilités et faciliter la maintenance du code.

```
/src
  ├── assets/       # Contient les ressources statiques (images, icônes, polices, etc.)
  ├── components/   # Regroupe les composants réutilisables de l'interface utilisateur
  ├── lib/          # Contient les fichiers de logique métier ou utilitaires
  ├── ui/           # Contient les éléments liés à l'interface utilisateur (layouts, styles spécifiques, etc.)
  ├── main.js       # Point d'entrée principal de l'application
  ├── style.css     # Feuille de styles globale pour l'application
```

## Bonnes pratiques pour un merge propre

### 1. Mettre à jour la branche locale
Avant de commencer un merge, assure-toi que ta branche locale est à jour :
```sh
# Se déplacer sur la branche principale
git checkout main
# Récupérer les dernières modifications
git pull origin main
```

### 2. Mettre à jour la branche de travail
Si tu travailles sur une branche spécifique, mets-la à jour :
```sh
# Revenir sur la branche de travail
git checkout feature/nom-de-la-branche
# La mettre à jour avec main
git merge dev
```
Si des conflits apparaissent, résous-les avant de continuer.

### 3. Tester le code après le merge
Après avoir fusionné, teste le projet pour s'assurer que tout fonctionne bien.

### 4. Pousser les modifications
Une fois les tests validés, pousse ta branche mise à jour :
```sh
git push origin nom-de-la-branche
```

### 5. Faire une Pull Request
Lorsque tout est prêt, crée une pull request sur GitHub/GitLab et demande une revue de code avant de fusionner dans `dev`.

### 6. Fusionner proprement
Une fois approuvé, fusionne en privilégiant `Squash and Merge` pour garder un historique propre. Si un `merge commit` est nécessaire, assure-toi qu'il est bien documenté.

En suivant ces étapes, tu garantis un historique Git propre et un code de qualité !
