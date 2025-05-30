## Ressources

**À lire ou à regarder**:

* [TypeScript en 5 minutes](/rltoken/JBobnOShA2LO-xxTJAyKtw "TypeScript en 5 minutes")
* [Documentation TypeScript](/rltoken/jWy0GemmKgkvZbvp3BoPrw "Documentation TypeScript")
* [Manipulation du DOM en TypeScript](/rltoken/qr9K-gPTaev_T-iNzRJyVg "Manipulation du DOM en TypeScript")
* [Types d'Objets en TypeScript](/rltoken/KHeDw9pp8j4jiQLU1tP0EA "Types d'Objets en TypeScript")
* [Référence TSConfig](/rltoken/NJjLYB-m5iBNZCpzkmdYew "Référence TSConfig")

## Objectifs d'Apprentissage

À la fin de ce projet, vous devriez être capable d'[expliquer à n'importe qui](/rltoken/oMJ6EN2QFDVJtFA6uU4f8Q "expliquer à n'importe qui"), **sans l'aide de Google**:

* Les types de base en TypeScript
* Les interfaces, classes et fonctions
* Comment travailler avec le DOM et TypeScript
* Les types génériques
* Comment utiliser les espaces de noms
* Comment fusionner les déclarations
* Comment utiliser un espace de noms ambiant pour importer une bibliothèque externe
* Le typage nominal de base avec TypeScript

## Exigences

* Éditeurs autorisés: `vi`, `vim`, `emacs`, `Visual Studio Code`
* Tous vos fichiers doivent se terminer par une nouvelle ligne
* Tous vos fichiers seront transpilés sur Ubuntu 18.04
* Vos scripts TS seront vérifiés avec `jest` (version 24.9.*)
* Un fichier `README.md` à la racine du dossier du projet est obligatoire
* Votre code doit utiliser l'extension `ts` lorsque possible
* Le compilateur TypeScript ne doit montrer aucun avertissement ni erreur lors de la compilation

## Tâches

### 1. Configuration et Interface Student

Copiez les fichiers de configuration suivants dans le répertoire `task_0`: `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`

Écrivez votre code dans le fichier `js/main.ts`:

* Créez une interface `Student` avec:
  * `firstName`: string
  * `lastName`: string
  * `age`: number
  * `location`: string
* Créez 2 étudiants (`student1` et `student2`) et stockez-les dans un tableau `studentsList`
* Utilisez Vanilla Javascript pour créer un tableau HTML avec les données des étudiants
* Chaque ligne doit afficher le prénom et la localisation de l'étudiant

### 2. Interface Teacher

Créez un répertoire `task_1` avec les fichiers de configuration: `package.json`, `tsconfig.json`, `webpack.config.js`

Dans `js/main.ts`:

* Créez une interface `Teacher` avec:
  * `firstName`: string (uniquement à l'initialisation)
  * `lastName`: string (uniquement à l'initialisation)
  * `fullTimeEmployee`: boolean
  * `yearsOfExperience`: number (optionnel)
  * `location`: string
  * Possibilité d'ajouter des attributs dynamiques (comme `contract: boolean`)

### 3. Interface Directors

Créez une interface `Directors` qui étend `Teacher` avec:
* Attribut obligatoire `numberOfReports: number`

### 4. Fonction PrintTeacher

Créez une fonction `printTeacher`:
* Accepte `firstName` et `lastName`
* Retourne la première lettre du prénom et le nom complet (ex: "J. Doe")
* Créez une interface `printTeacherFunction` pour cette fonction

### 5. Classe StudentClass

Créez une classe `StudentClass`:
* Constructeur prend `firstName` et `lastName`
* Méthode `workOnHomework()` retourne "Currently working"
* Méthode `displayName()` retourne le prénom
* Utilisez des interfaces pour le constructeur et la classe

### 6. Interfaces et Classes Advanced

Créez:
* Interface `DirectorInterface` (3 méthodes)
* Interface `TeacherInterface` (3 méthodes)
* Classes `Director` et `Teacher` implémentant ces interfaces
* Fonction `createEmployee` retournant soit `Director` soit `Teacher`

### 7. String Literal Types

* Fonction `isDirector` (type predicate)
* Fonction `executeWork` appelant la bonne méthode selon le type d'employé

### 8. Ambient Namespaces

Dans `task_3`:
* Type `RowID` et interface `RowElement`
* Fichier ambient pour `crud.js`
* Utilisation des fonctions CRUD

### 9. Namespace pour Classes

Dans `task_4/js/subjects`:
* Interface `Teacher` dans namespace `Subjects`
* Classes pour différents sujets (Cpp, React, Java)
* Gestion de l'expérience d'enseignement

### 10. Brand Types

Dans `task_5`:
* Interfaces `MajorCredits` et `MinorCredits`
* Fonctions pour sommer les crédits

**Exigences pour toutes les tâches:**
* Pas d'erreurs TypeScript
* Utilisation maximale du typage
* Respecter les spécifications exactes
