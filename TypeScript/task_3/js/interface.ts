// Définition d'un alias de type pour l'identifiant de ligne
// RowID est un simple nombre utilisé comme identifiant unique
type RowID = number;

// Interface définissant la structure d'une ligne de données
interface RowElement {
  firstName: string;    // Prénom de la personne
  lastName: string;     // Nom de famille de la personne
  age?: number;         // Âge de la personne (optionnel)
}

// Export des types pour utilisation dans d'autres fichiers
export { RowID, RowElement };
