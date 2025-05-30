// Interface définissant la structure d'un étudiant
interface Student {
  firstName: string;   // Prénom de l'étudiant
  lastName: string;    // Nom de famille de l'étudiant
  age: number;        // Âge de l'étudiant
  location: string;   // Localisation de l'étudiant
}

// Création du premier étudiant
const student1: Student = {firstName: 'John', lastName: 'Doe', age: 27, location: 'Someplace'};

// Création du deuxième étudiant
const student2: Student = { firstName: 'Joe', lastName: 'Average', age: 24, location: 'Somewhere'};

// Création d'un tableau contenant les deux étudiants
const studentsList: Student[] = [student1, student2];

// Création d'un tableau HTML pour afficher les données
const studentsTable = document.createElement('table');
const headerRow = document.createElement('tr');
headerRow.innerHTML = '<th>First Name</th><th>Location</th>';
studentsTable.appendChild(headerRow);

// Parcours de la liste des étudiants pour créer les lignes du tableau
studentsList.forEach(student => {
  // Création d'une nouvelle ligne
  const row = document.createElement('tr');

  // Création de la cellule pour le prénom
  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  // Création de la cellule pour la localisation
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  // Ajout des cellules à la ligne
  row.appendChild(nameCell);
  row.appendChild(locationCell);

  // Ajout de la ligne au tableau
  studentsTable.appendChild(row);
});

// Ajout du tableau au corps du document
document.body.appendChild(studentsTable);
