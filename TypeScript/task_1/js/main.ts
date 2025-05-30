// Interface définissant la structure d'un enseignant
interface Teacher {
  firstName: string;        // Prénom (ne peut être modifié après l'initialisation)
  lastName: string;         // Nom de famille (ne peut être modifié après l'initialisation)
  fullTimeEmployee: boolean; // Indique si l'enseignant est à temps plein
  yearsOfExperience?: number; // Années d'expérience (optionnel)
  location: string;         // Lieu de travail

  // Permet d'ajouter des propriétés supplémentaires de type quelconque
  [key: string]: any;
}

// Exemple d'utilisation de l'interface Teacher
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Interface Directors qui étend Teacher avec une propriété supplémentaire
interface Directors extends Teacher {
  numberOfReports: number;  // Nombre de rapports supervisés
}

// Exemple d'utilisation de l'interface Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface pour la fonction d'impression du nom de l'enseignant
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implémentation de la fonction qui formate le nom de l'enseignant
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// Interface pour le constructeur de la classe Student
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface définissant les méthodes requises pour la classe Student
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implémentation de la classe Student
class StudentClass implements StudentInterface {
  private firstName: string;  // Prénom de l'étudiant (privé)
  private lastName: string;   // Nom de famille de l'étudiant (privé)

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Méthode indiquant que l'étudiant travaille
  workOnHomework(): string {
    return "Currently working";
  }

  // Méthode retournant le prénom de l'étudiant
  displayName(): string {
    return this.firstName;
  }
}

// Exemples d'utilisation de la classe Student
const student: StudentInterface = new StudentClass("John", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());

// Vérification de la conformité du constructeur avec l'interface
const StudentConstructorCheck: StudentConstructor = StudentClass;
const anotherStudent: StudentInterface = new StudentConstructorCheck("Jane", "Smith");
console.log(anotherStudent.displayName());
