// Variables
// 1. Declare variables using `var`, `let`, and `const` to store your full name. Print all the variables.
var fullNameVar = 'Your Full Name (Var)'
let fullNameLet = 'Your Full Name (Let)'
const fullNameConst = 'Your Full Name (Const)'
console.log(fullNameVar)
console.log(fullNameLet)
console.log(fullNameConst)

// 2. Use `let` to create a variable representing your age, then update it. Print the age before and after the update.
let age = 25
console.log('Age before update:', age)
age = 26
console.log('Age after update:', age)

// 3. Create a constant variable with your birth year, day, and month (in any format you choose). Print the birth date.
const birthYear = 1995
const birthMonth = 'January'
const birthDay = 1
console.log('Birth Date:', birthMonth, birthDay, birthYear)

// Operators
// 1. Calculate the area of a rectangle with a length of 10 cm and a width of 20 cm (Formula: length x width). Print the area.
const length = 10
const width = 20
const area = length * width
console.log('Area of Rectangle:', area)

// 2. Compare its area to the area of a rectangle with a length of 15 cm and a width of 30 cm. Print the comparison.
const length2 = 15
const width2 = 30
const area2 = length2 * width2
console.log(
  'Comparison of Areas:',
  area > area2
    ? 'First rectangle has a greater area'
    : 'Second rectangle has a greater area',
)

// Arrays
// 1. Create an array of favorite fruits and store the third element in a separate variable. Print both the array and the separate variable.
const favoriteFruits = ['Apple', 'Banana', 'Orange']
const thirdFruit = favoriteFruits[2]
console.log('Favorite Fruits:', favoriteFruits)
console.log('Third Fruit:', thirdFruit)

// 2. Print the length of the fruit array you created.
console.log('Length of Favorite Fruits Array:', favoriteFruits.length)

// 3. Add and remove elements from the fruit array. Print the results after adding and removing.
favoriteFruits.push('Mango')
console.log('Favorite Fruits after Adding:', favoriteFruits)
favoriteFruits.pop()
console.log('Favorite Fruits after Removing:', favoriteFruits)

// Objects
// 1. Create an object representing a person with first name, last name, age, gender, current occupation, and years of education. Print the person's details.
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  gender: 'Male',
  occupation: 'Software Engineer',
  educationYears: 10,
}
console.log("Person's Details:", person)

// 2. Add two new properties to the person (of your choice). Print the person's details after the addition.
person.nationality = 'American'
person.hobbies = ['Reading', 'Gaming']
console.log("Person's Details after Addition:", person)

// 3. Change the values of two existing properties in the person object. Print the person's details after the changes.
person.age = 35
person.occupation = 'Data Scientist'
console.log("Person's Details after Changes:", person)

// Functions
// 1. Create a function to calculate the product of two numbers. Print the result.
function multiply(a, b) {
  return a * b
}
console.log('Product of 2 and 3:', multiply(2, 3))

// 2. Create a function to calculate the sum of two numbers. Print the result.
function add(a, b) {
  return a + b
}
console.log('Sum of 2 and 3:', add(2, 3))

// 3. Create a function that returns a person's name with a personalized greeting. Print the result.
function greetPerson(person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName + '!'
}
console.log('Greeting:', greetPerson(person))

// 4. Create a function that converts Celsius temperatures to Fahrenheit (Formula: (Celsius * 9/5) + 32). Print the result after conversion.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}
console.log('Temperature in Fahrenheit:', celsiusToFahrenheit(25))

// 5. Create a function that checks if a person is eligible for a discount. Create two person objects, each with first name, last name, age, and membership status.
//    - Note: Only one person can have an active membership.
//    - If the person is 18 or older and has an active membership, they are eligible for a discount; otherwise, they are not.
//    - Use logical operators and print an appropriate message with all the person's details.
const person1 = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 20,
  membership: true,
}

const person2 = {
  firstName: 'Bob',
  lastName: 'Johnson',
  age: 25,
  membership: false,
}

function checkDiscountEligibility(person) {
  if (person.age >= 18 && person.membership) {
    return (
      person.firstName + ' ' + person.lastName + ' is eligible for a discount.'
    )
  } else {
    return (
      person.firstName +
      ' ' +
      person.lastName +
      ' is not eligible for a discount.'
    )
  }
}

console.log(checkDiscountEligibility(person1))
console.log(checkDiscountEligibility(person2))

// Conditions
// 1. Use `if...else` to check if a number is positive, negative, or zero. Print all possible outcomes.
const number = -5

if (number > 0) {
  console.log('Number is positive')
} else if (number < 0) {
  console.log('Number is negative')
} else {
  console.log('Number is zero')
}

// 2. Create a person object with details like first name, last name, and age. Use the Ternary Operator to determine if the person is an adult or a minor (adult = 18 and above).
const person3 = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 20,
}

const personType = person3.age >= 18 ? 'Adult' : 'Minor'
console.log('Person Type:', personType)

// 3. Create 5 students with their first name, last name, class, and the grade they received in an exam. Each grade falls into the following categories:
//    - A: 90-100
//    - B: 80-89
//    - C: 70-79
//    - D: 60-69
//    - F: Below 60
//    Use a switch statement to print the correct grade category for each student. Don't forget to also print the student's details.
const students = [
  {
    firstName: 'Student1',
    lastName: 'Lastname1',
    class: 'Class1',
    grade: 95,
  },
  {
    firstName: 'Student2',
    lastName: 'Lastname2',
    class: 'Class2',
    grade: 85,
  },
  {
    firstName: 'Student3',
    lastName: 'Lastname3',
    class: 'Class3',
    grade: 75,
  },
  {
    firstName: 'Student4',
    lastName: 'Lastname4',
    class: 'Class4',
    grade: 65,
  },
  {
    firstName: 'Student5',
    lastName: 'Lastname5',
    class: 'Class5',
    grade: 55,
  },
]

for (let i = 0; i < students.length; i++) {
  const student = students[i]
  let gradeCategory

  switch (true) {
    case student.grade >= 90 && student.grade <= 100:
      gradeCategory = 'A'
      break
    case student.grade >= 80 && student.grade <= 89:
      gradeCategory = 'B'
      break
    case student.grade >= 70 && student.grade <= 79:
      gradeCategory = 'C'
      break
    case student.grade >= 60 && student.grade <= 69:
      gradeCategory = 'D'
      break
    default:
      gradeCategory = 'F'
  }

  console.log('Student:', student.firstName, student.lastName)
  console.log('Class:', student.class)
  console.log('Grade:', gradeCategory)
}

// 4. Write a function that takes a year as a parameter and checks if the given year is a leap year, returning true or false accordingly.
//    - A leap year is divisible by 4 but not by 100 unless it is also divisible by 400.
//    - Print whether it's a leap year or not based on the function's result.
//    Tip: Use remainder checking (modulus) for the condition.
function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true
  } else {
    return false
  }
}

console.log('Is 2024 a leap year?', isLeapYear(2024))

// Loops
// 1. Initialize a variable with any number you choose. Use a For Loop to print numbers from 1 to 10. If the number is even, don't print it; instead, print an error message. If the number is odd, print it.
const startNumber = 7

for (let i = startNumber; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log('Error: Even number found')
  } else {
    console.log('Odd number:', i)
  }
}

// 2. Initialize a variable with the number 20. Use a While Loop to print all numbers greater than 0, subtracting one each time. Print all numbers greater than 1.
let number2 = 20

while (number2 > 0) {
  if (number2 > 1) {
    console.log('Number greater than 1:', number2)
  }
  number2--
}

// 3. Repeat exercise 2 using a Do-While Loop.
let number3 = 20

do {
  if (number3 > 1) {
    console.log('Number greater than 1:', number3)
  }
  number3--
} while (number3 > 0)

// 4. Create an array with 6 elements. Use a For…of Loop to print all the elements in the array.
const array = [1, 2, 3, 4, 5, 6]

for (const element of array) {
  console.log('Array Element:', element)
}

// 5. Create an object with several properties. Change the value of one of the keys. Then, print the object using a For…in Loop.
const object = {
  key1: 'Value1',
  key2: 'Value2',
  key3: 'Value3',
}

object.key2 = 'New Value'

for (const key in object) {
  console.log('Object Key:', key)
  console.log('Object Value:', object[key])
}

// (Bonus) Import & Export:
// 1. Create a file in your project named `Utils.js` that includes functions for addition, subtraction, division, and multiplication. Export these functions.
// 2. Create another file in your project named `mathProblems.js`. In this file, create several simple math problems and use the imported functions from `Utils.js` to solve them.
//    Note: You must use each function from `Utils.js` at least once.

// (Bonus) Error Handling (try-catch):
// 1. Create an array of numbers. Write code that attempts to access each index in the array and print its element. When the index is out of bounds, print an appropriate error message.
const numbers = [1, 2, 3]

for (let i = 0; i <= numbers.length; i++) {
  try {
    console.log('Element at index', i, ':', numbers[i])
  } catch (error) {
    console.log('Error: Index out of bounds')
  }
}

// 2. Create an object representing a person with first name, last name, and city of residence. Write code that attempts to access each key in the object. When trying to access a non-existent key, print an appropriate error message.
const person4 = {
  firstName: 'John',
  lastName: 'Doe',
  city: 'New York',
}

try {
  console.log('First Name:', person4.firstName)
  console.log('Last Name:', person4.lastName)
  console.log('City:', person4.city)
  console.log('Age:', person4.age)
} catch (error) {
  console.log('Error: Key does not exist')
}
