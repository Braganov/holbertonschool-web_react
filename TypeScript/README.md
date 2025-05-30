# TypeScript

## Description
Ce projet est une introduction à TypeScript, un sur-ensemble typé de JavaScript qui se compile en JavaScript pur. Il couvre les concepts fondamentaux de TypeScript à travers une série d'exercices pratiques.

## Concepts Couverts

- Types de base en TypeScript
- Interfaces et Classes
- Manipulation du DOM
- Types génériques
- Espaces de noms (Namespaces)
- Fusion de déclarations
- Espaces de noms ambiants
- Typage nominal

## Configuration du Projet

### Prérequis
- Node.js (version spécifiée dans .nvmrc : 20.19.2)
- npm (gestionnaire de paquets Node.js)

### Outils de Développement
Les éditeurs autorisés sont :
- Visual Studio Code
- vim
- vi
- emacs

### Fichiers de Configuration
Le projet utilise plusieurs fichiers de configuration :
- `package.json` : Gestion des dépendances et scripts npm
- `tsconfig.json` : Configuration du compilateur TypeScript
- `webpack.config.js` : Configuration de Webpack
- `.eslintrc.js` : Configuration d'ESLint
- `.nvmrc` : Spécification de la version Node.js

## Structure du Projet

Le projet est divisé en plusieurs tâches progressives :

### Task 0 : Introduction aux Types de Base
- Création d'une interface Student
- Manipulation du DOM avec TypeScript
- Création d'un tableau d'étudiants

### Task 1 : Interfaces et Classes
- Interface Teacher avec propriétés requises et optionnelles
- Extension d'interface (Directors)
- Création d'une classe StudentClass avec constructeur typé

### Task 2 : Types Avancés
- Interfaces DirectorInterface et TeacherInterface
- Implémentation des classes Director et Teacher
- Fonction factory createEmployee
- Types littéraux et type guards

### Task 3 : Espaces de Noms Ambiants
- Création de types et interfaces (RowID, RowElement)
- Déclarations ambiantes pour crud.js
- Utilisation de triple-slash directives

### Task 4 : Namespaces et Fusion de Déclarations
- Namespace Subjects
- Classes pour différentes matières (Cpp, Java, React)
- Fusion de déclarations pour étendre l'interface Teacher

### Task 5 : Typage Nominal
- Interfaces MajorCredits et MinorCredits avec brand property
- Fonctions pour la gestion des crédits

## Scripts Disponibles

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run start-dev

# Construction du projet
npm run build

# Exécution des tests
npm test
```

## Tests et Validation
- Les tests sont exécutés avec Jest (version 24.9.*)
- Le code est validé avec ESLint
- Le compilateur TypeScript ne doit montrer aucun avertissement

## Exigences Techniques
- Tous les fichiers doivent se terminer par une nouvelle ligne
- Le code doit utiliser l'extension .ts quand possible
- Le projet est transpilé sur Ubuntu 18.04
- La compilation ne doit générer aucune erreur ni avertissement

## Ressources Complémentaires
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)
- [TypeScript en 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Manipulation du DOM en TypeScript](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)
- [Types d'Objets TypeScript](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Référence TSConfig](https://www.typescriptlang.org/tsconfig)
