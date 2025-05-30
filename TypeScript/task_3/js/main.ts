/// <reference path="./crud.d.ts" />
// Directive "triple slash" : une balise xml unique contenant des directives pour le compilateur

// Importation des types depuis le fichier d'interface
import { RowID, RowElement } from './interface';
// Importation de toutes les fonctions CRUD depuis crud.js
import * as CRUD from './crud.js';

// Création d'une nouvelle ligne avec les informations de base
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insertion de la ligne et récupération de l'ID généré
const newRowID: RowID = CRUD.insertRow(row);

// Création d'une version mise à jour de la ligne avec l'âge ajouté
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23  // Ajout de l'âge dans la mise à jour
};

// Mise à jour de la ligne existante avec les nouvelles informations
CRUD.updateRow(newRowID, updatedRow);
// Suppression de la ligne
CRUD.deleteRow(newRowID);
