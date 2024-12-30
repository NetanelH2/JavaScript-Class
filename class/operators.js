// Arithmetic operators

// Addition
let addOperator = 1 + 5

// Subtraction
let subOperator = 5 - 1

// Multiplication
let mulOperator = 5 * 5

// Division
let divOperator = 10 / 2

// Modulus
let modOperator = 10 % 3

// Assignment operators

// Addition
let addAssignment = 1
addAssignment = addAssignment + 5
addAssignment += 5

//Equality operators
let x = 10
let y = 5
let equal = x == y // false

// Not equal
let notEqual = x != y // true

// Greater than
let greater = x > y // true

// Less than
let less = x < y // false

// Greater than or equal to
let greaterThan = x >= y // true

// Less than or equal to
let lessThan = x <= y // false

// Strict equality
let z = 10
let a = '10'

z == a

// Logical operators
// Logical AND
let age = 25
let isStudent = true

let solution = age > 18 && isStudent === true

// Logical OR
let solution2 = age > 18 || isStudent === true

// Logical NOT
let solution3 = !isStudent === false

// increment and decrement operators
// Increment
let addSomething = 1
addSomething++ // addSomething = addSomething + 1
addSomething--

// String operators
let firstName = 'John'
let lastName = 'Doe'

let fullName = firstName + '\n' + lastName
let fullName2 = `${firstName}\n${lastName}`

// Conditional (ternary) operator
let age2 = 18

let teacher = age2 > 18 ? 'Adult' : 'Minor'

console.log(teacher)
