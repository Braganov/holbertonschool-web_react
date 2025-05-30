/* Propriétés de marquage (Brand Properties):

_brand: 'major' et _brand: 'minor' sont des propriétés de marquage
Elles rendent les interfaces nominalement différentes (pas seulement structurellement)
TypeScript les traitera comme des types distincts même si elles ont la même structure

Sécurité des types:

On ne peut pas accidentellement passer MinorCredits à sumMajorCredits
On ne peut pas accidentellement passer MajorCredits à sumMinorCredits
La propriété de marquage assure la sécurité des types à la compilation
*/

// Interface marquée pour les crédits majeurs
interface MajorCredits {
  credits: number;         // Nombre de crédits
  _brand: 'major';        // Propriété de marquage pour identification unique
}

// Interface marquée pour les crédits mineurs
interface MinorCredits {
  credits: number;         // Nombre de crédits
  _brand: 'minor';        // Propriété de marquage pour identification unique
}

// Fonction pour additionner les crédits majeurs
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'major'
  };
}

// Fonction pour additionner les crédits mineurs
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'minor'
  };
}

// Exemples d'utilisation:
const majorSubject1: MajorCredits = { credits: 3, _brand: 'major' };
const majorSubject2: MajorCredits = { credits: 4, _brand: 'major' };

const minorSubject1: MinorCredits = { credits: 1, _brand: 'minor' };
const minorSubject2: MinorCredits = { credits: 2, _brand: 'minor' };

// Calcul des totaux
const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

// Affichage des résultats
console.log('Total Major Credits:', totalMajorCredits.credits); // 7
console.log('Total Minor Credits:', totalMinorCredits.credits); // 3
