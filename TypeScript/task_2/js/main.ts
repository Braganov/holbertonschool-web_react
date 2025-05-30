// Interface de base pour un enseignant
interface Teacher {
  firstName: string;        // Prénom
  lastName: string;         // Nom de famille
  fullTimeEmployee: boolean; // Statut temps plein
  yearsOfExperience?: number; // Années d'expérience (optionnel)
  location: string;         // Lieu de travail

  // Permet l'ajout dynamique de propriétés
  [key: string]: any;
}

// Interface pour un directeur, étend Teacher
interface Directors extends Teacher {
  numberOfReports: number;  // Nombre de rapports gérés
}

// Interface pour la fonction d'impression du nom
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Fonction qui formate le nom de l'enseignant (initiale + nom)
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// Interface pour le constructeur d'étudiant
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface définissant les méthodes d'un étudiant
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implémentation de la classe Étudiant
class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student: StudentInterface = new StudentClass("John", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());

const StudentConstructorCheck: StudentConstructor = StudentClass;
const anotherStudent: StudentInterface = new StudentConstructorCheck("Jane", "Smith");
console.log(anotherStudent.displayName());

// Interface définissant les méthodes d'un directeur
interface DirectorInterface {
  workFromHome(): string;    // Méthode pour le travail à domicile
  getCoffeeBreak(): string;  // Méthode pour les pauses café
  workDirectorTasks(): string; // Méthode pour les tâches de direction
}

// Interface définissant les méthodes d'un enseignant
interface TeacherInterface {
  workFromHome(): string;    // Méthode pour le travail à domicile
  getCoffeeBreak(): string;  // Méthode pour les pauses café
  workTeacherTasks(): string; // Méthode pour les tâches d'enseignement
}

// Classe Directeur implémentant DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Classe Enseignant implémentant TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Fonction factory pour créer soit un Directeur soit un Enseignant selon le salaire
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Tests de création d'employés
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Fonction de type guard pour vérifier si un employé est un directeur
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Fonction pour exécuter le travail selon le type d'employé
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Tests d'exécution du travail
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// Type littéral pour les matières enseignées
type Subjects = 'Math' | 'History';

// Fonction pour enseigner une matière
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
