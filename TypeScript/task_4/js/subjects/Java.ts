namespace Subjects {
  // Fusion de déclarations - ajout d'un attribut optionnel à l'interface Teacher
  // pour suivre l'expérience en enseignement de Java
  export interface Teacher {
    experienceTeachingJava?: number;    // Années d'expérience en enseignement de Java
  }

  // Classe représentant la matière Java, hérite de la classe Subject
  export class Java extends Subject {
    // Retourne la liste des prérequis pour le cours de Java
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    // Vérifie si un professeur est disponible pour enseigner Java
    // en fonction de son expérience
    getAvailableTeacher(): string {
      // Vérifie si le professeur a de l'expérience en Java
      if (this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      // Retourne un message si aucun professeur qualifié n'est disponible
      return "No available teacher";
    }
  }
}
