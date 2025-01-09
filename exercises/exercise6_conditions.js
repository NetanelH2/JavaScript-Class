// 1.
function checkNumber(number) {
  if (number > 0) {
    console.log(number, 'is a positive number')
  }
  if (number < 0) {
    console.log(number, 'is a negative number')
  }
  if (number === 0) {
    console.log(number, 'is zero')
  }
}

checkNumber(1)
checkNumber(-1)
checkNumber(0)

// 3.
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: Below 60.
const student1 = {firstName: 'John', lastName: 'Smith', class: '12A', grade: 95}
const student2 = {
  firstName: 'Emma',
  lastName: 'Johnson',
  class: '12A',
  grade: 82,
}
const student3 = {
  firstName: 'Michael',
  lastName: 'Brown',
  class: '12B',
  grade: 75,
}
const student4 = {
  firstName: 'Sarah',
  lastName: 'Davis',
  class: '12B',
  grade: 68,
}
const student5 = {
  firstName: 'David',
  lastName: 'Wilson',
  class: '12A',
  grade: 55,
}
function checkGrade(grade) {
  switch (true) {
    case grade >= 90 && grade <= 100:
      return 'A'
    case grade >= 80 && grade <= 89:
      return 'B'
    case grade >= 70 && grade <= 79:
      return 'C'
    case grade >= 60 && grade <= 69:
      return 'D'
    case grade >= 0 && grade < 60:
      return 'F'
    default:
      return 'Invalid grade'
  }
}

console.log(student1.firstName, 'Got grade:', checkGrade(student1.grade))
console.log(student2.firstName, 'Got grade:', checkGrade(student2.grade))
console.log(student3.firstName, 'Got grade:', checkGrade(student3.grade))
console.log(student4.firstName, 'Got grade:', checkGrade(student4.grade))
console.log(student5.firstName, 'Got grade:', checkGrade(student5.grade))

// 4.
function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, 'is a leap year')
  } else {
    console.log(year, 'is not a leap year')
  }
}
checkLeapYear(2024)
checkLeapYear(1900)
checkLeapYear(2000)
