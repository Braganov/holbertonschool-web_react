// Importation des types nécessaires pour les opérations CRUD
import { RowID, RowElement } from './interface';

// Déclaration ambiante de la fonction d'insertion qui prend une ligne et retourne un ID
declare function insertRow(row: RowElement): RowID;

// Déclaration ambiante de la fonction de suppression qui prend un ID et ne retourne rien
declare function deleteRow(rowId: RowID): void;

// Déclaration ambiante de la fonction de mise à jour qui prend un ID et une ligne, et retourne l'ID
declare function updateRow(rowId: RowID, row: RowElement): RowID;
