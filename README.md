# 🏥 Gestion Cabinet - Application Web (JS Native)

## 📖 Description

Application web de gestion pour cabinet médical/dentaire développée en **JavaScript natif**.  
Elle permet la gestion des patients, rendez-vous, recettes & dépenses, avec authentification sécurisée côté client.

---

## ✨ Fonctionnalités

### 🔐 Authentification & Sécurité

-  Initialisation de l’application avec création du mot de passe (si première utilisation).
-  Connexion avec **hashage du mot de passe** et vérification côté client.
-  Compteur d’échecs et **verrouillage temporaire** après plusieurs tentatives.
-  **Bonus** : chiffrement du JSON stocké dans le `localStorage`.

### 👥 Gestion des Patients

-  **CRUD complet** : ajouter, modifier, supprimer des patients.
-  Champs : nom complet, téléphone, e-mail, notes.
-  Recherche simple par **nom ou téléphone**.
-  Historique des rendez-vous liés.

### 📅 Gestion des Rendez-vous

-  Création de rendez-vous avec patient, praticien, salle, type, durée.
-  Modification (horaire, durée, statut).
-  Annulation ou statut **no-show**.
-  Filtrage par praticien / statut.
-  Vue **Jour** (agenda simple).

### 💰 Gestion des Recettes & Dépenses

-  Enregistrer une recette (montant, méthode de paiement, libellé).
-  Enregistrer une dépense (montant, catégorie, libellé, date).
-  Suivi du budget mensuel (**objectif vs réalisé**).

---

## 🗂 Structure du Projet

```bash
.
├── assets/           # Images, icônes...
├── components/       # Composants réutilisables (UI)
├── layouts/          # Layouts globaux
├── pages/            # Pages principales
├── styles/           # Feuilles de style (main.css, reset.css)
├── router.js         # Gestion de la navigation côté client
├── utilities.js      # Fonctions utilitaires (hash, helpers...)
├── index.html        # Entrée principale
└── package.json
```

## 🚀 Installation & Lancement

### 1️⃣ Installer les dépendances

```bash
npm install
```

### 2️⃣ Lancer le serveur de développement

```bash
npm run dev
```

L'application sera accessible sur http://localhost:3000 (par défaut avec serve).

## 🎨 Design & Gestion de Projet

-  **Figma** : [Lien vers le design](https://www.figma.com/design/0UMmbFf3BEqZdb0mJUlA4m/clinicBoard?node-id=0-1&t=C0ni6xfI1J8Jf2Wo-1)
-  **Jira** : [Lien vers le board](https://ayoubakraou-1757952765297.atlassian.net/jira/software/projects/CB/boards/35?atlOrigin=eyJpIjoiMDgxY2E1OGMzYzQzNGEyMmEzNzA5YzA1ZTEyY2EyYmQiLCJwIjoiaiJ9)
