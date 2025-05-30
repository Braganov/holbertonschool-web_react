// Espace de noms pour regrouper toutes les classes liées aux matières
namespace Subjects {
  // Classe de base pour toutes les matières
  export class Subject {
    // Déclaration du professeur avec l'opérateur '!' pour indiquer qu'il sera assigné plus tard
    // L'assertion d'affectation définitive signifie "Je sais que cette propriété sera assignée"
    teacher!: Teacher;

    // Méthode pour définir le professeur de la matière
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
