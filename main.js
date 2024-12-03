// Task 1

const favoriteSongs = ["Tiny Dancer", "Running Up That Hill", "Don't Stop Moving", "Tragedy", "Crazy Horses"];

const pennyProfits = [1, 2, 4, 8, 16, 32, 64];

const friends = [
  { name: "Chris", specialSkill: "changing lives" },
  { name: "Lizzie", specialSkill: "being friendly" },
  { name: "Ben", specialSkill: "code rapping" },
  { name: "Tao", specialSkill: "hand raising" },
  { name: "Liz", specialSkill: "crochet" },
  { name: "Patrick", specialSkill: "Call of Duty" },
  { name: "Tim", specialSkill: "analogies" },
  { name: "James", specialSkill: "friendship" },
  { name: "Joseph", specialSkill: "being positive" },
  { name: "Max", specialSkill: "papier-mâché" }
];

// Task 2 

let options = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log(options[2]);  
console.log(options[9]);
console.log(options[2]); 

// Task 3 

let englishNumbers = ["one", "two", "three", "four", "five"];
let index = 0;

while (index < englishNumbers.length) {
  console.log(englishNumbers[index]);
  index++;
}

// Task 4

for (let i = 0; i < englishNumbers.length; i++) {
  console.log(englishNumbers[i]);
}

// Task 5

let words = ["ben", "ha", "spla", "fa", "ca", "dra"];

for (let i = 0; i < words.length; i++) {
  words[i] += "t";
}

console.log(words); 

// Task 6 
  
let schoolOfCodeBootcamp = {
    name: "School of Code Bootcamp",
    cohorts: [
      {
        name: "BC17",
        startDate: "1 Jan 2024",
        students: [] 
      },
      {
        name: "BC18",
        startDate: "25 Nov 2024",
        students: [
          { firstName: "Sumeya", lastName: "Ahmed", age: 24, birthDay: "22/03/2000" },
          { firstName: "John", lastName: "Doe", age: 26, birthDay: "05/06/1998" },
          { firstName: "Emily", lastName: "Smith", age: 22, birthDay: "12/09/2001" }
        ]
      }
    ]
  };
  
  function getRandomStudent(cohortName) {
    let cohort = schoolOfCodeBootcamp.cohorts.find(i => i.name === cohortName);
  
    if (cohort && cohort.students.length > 0) {
      let randomIndex = Math.floor(Math.random() * cohort.students.length);
      let randomStudent = cohort.students[randomIndex]
      return console.log(randomStudent.firstName, randomStudent.lastName, randomStudent.age, randomStudent.birthDay)
    }
  }
  
getRandomStudent("BC18");

  