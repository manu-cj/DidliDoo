# 🎉 DidliDoo - Event Planner

**DidliDoo** is a revolutionary application to organize events with friends, family, or colleagues.  
Simple, effective, and collaborative — it helps you plan unforgettable moments with the people who matter!

---

## 🚀 The Mission

You've been hired by a *truly disruptive* startup to build a modern front-end interface with the following features:

- 🌱 Display all events, including each participant's availability  
- 🌱 Create a new event  
- 🌱 Add availability to an existing event  
- 🌱 Edit an event's name, description, or author  
- 🌱 Delete an event  
- ✅ Validate inputs before sending them to the API:
  - Required fields must be filled
  - Maximum length: 256 characters
  - Show appropriate error messages below inputs when validation fails

### 🎁 Bonus Feature

- 🌼 Display the best possible date for the event based on everyone's availability

---

## 🗂️ Project Structure

# Structure du dossier `src/`

## 📁 src
Contient tout le code source de l'application.

### 📁 assets
Répertoire généralement utilisé pour stocker des fichiers statiques comme des images, icônes, polices, etc.
(N'est pas développé dans l'image, donc pas de détails supplémentaires ici.)

### 📁 components
Contient les composants réutilisables de l'interface utilisateur.

#### 📁 form
Composants liés à la gestion des événements et de l'interface utilisateur :
- `AddEvent.js` : Formulaire ou composant pour ajouter un événement.
- `AddUser.js` : Composant pour ajouter un utilisateur.
- `DeleteEventModal.js` : Fenêtre modale pour confirmer la suppression d'un événement.
- `UpdateEvent.js` : Formulaire ou composant pour mettre à jour un événement.
- `cardAllEvent.js` : Affichage des cartes d'événements.
- `Header.js` : Composant pour l'en-tête de l'application.
- `Modal.js` : Composant générique de modal.
- `Notifications.js` : Gestion des notifications utilisateur.

### 📁 lib
Contient les fonctions de logique métier ou de gestion des données (appel API par exemple) :
- `deleteEvent.js` : Fonction pour supprimer un événement.
- `fetchEvent.js` : Fonction pour récupérer des événements.
- `postAndPatchData.js` : Fonction pour créer ou modifier des données via API.

### 📁 ui
Contient les fichiers de style CSS :
- `buttons.css` : Styles des boutons.
- `cards.css` : Styles des cartes (probablement pour les événements).
- `footer.css` : Styles du pied de page.
- `form.css` : Styles pour les formulaires.
- `header.css` : Styles de l'en-tête.
- `main.css` : Styles généraux de la page principale.
- `modal.css` : Styles pour les modales.
- `notification.css` : Styles pour les notifications.

### 📄 main.js
Point d'entrée ou logique principale du frontend.

### 📄 style.css
Feuille de style globale.


---


---

## 👨‍💻 Made with 💙 by

| Name | GitHub |
|------|--------|
| 🧠 Manu-cj | [@Manu-cj](https://github.com/Manu-cj) |
| 🎨 Antoine Chapon | [@Antoine-chapon](https://github.com/Antoine-chap) |
| 🛠️ Inna Kobets | [@InnaKobets](https://github.com/inna77777) |

---

## ✨ Final Note

> *“If you want to go fast, go alone. If you want to go far, go with DidliDoo.”*  
> — Probably someone on our team

---

💡

