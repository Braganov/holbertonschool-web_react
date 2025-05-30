namespace Subjects {
  // Fusion de déclarations - ajout d'un attribut optionnel à l'interface Teacher
  // pour suivre l'expérience en enseignement de React
  export interface Teacher {
    experienceTeachingReact?: number;    // Années d'expérience en enseignement de React
  }

  // Classe représentant la matière React, hérite de la classe Subject
  export class React extends Subject {
    // Retourne la liste des prérequis pour le cours de React
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    // Vérifie si un professeur est disponible pour enseigner React
    // en fonction de son expérience
    getAvailableTeacher(): string {
      // Vérifie si le professeur a de l'expérience en React
      if (this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      // Retourne un message si aucun professeur qualifié n'est disponible
      return "No available teacher";
    }
  }
}
