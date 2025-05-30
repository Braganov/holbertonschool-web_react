namespace Subjects {
  // Fusion de déclarations - ajout d'un attribut optionnel à l'interface Teacher
  // pour suivre l'expérience en enseignement du C++
  export interface Teacher {
    experienceTeachingC?: number;    // Années d'expérience en enseignement du C++
  }

  // Classe représentant la matière C++, hérite de la classe Subject
  export class Cpp extends Subject {
    // Retourne la liste des prérequis pour le cours de C++
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    // Vérifie si un professeur est disponible pour enseigner le C++
    // en fonction de son expérience
    getAvailableTeacher(): string {
      // Vérifie si le professeur a de l'expérience en C++
      if (this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      // Retourne un message si aucun professeur qualifié n'est disponible
      return "No available teacher";
    }
  }
}
