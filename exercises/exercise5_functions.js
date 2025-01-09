// 1.
const multipleTwoNumbers = (a, b) => a * b
console.log(multipleTwoNumbers(2, 2))

// 2.
const addTwoNumbers = (a, b) => a + b
console.log(addTwoNumbers(2, 2))

// 3.
const getMessage = (name) => console.log('Happy Birthday, ' + name)

getMessage('Israel')

// 4.
const converter = (celsius) => (celsius * 9) / 5 + 32

console.log(converter(30))

// 5.
const person1 = {
  firstName: 'Rita',
  lastName: 'Alhasov',
  age: 22,
  membership: true,
}

const person2 = {
  firstName: 'Israel',
  lastName: 'Madmon',
  age: 17,
  membership: false,
}

const checkMembership = (age, membership) =>
  age >= 18 && membership === true
    ? 'Membership is valid'
    : 'Membership is expired'

console.log(checkMembership(person1.age, person1.membership))
console.log(checkMembership(person2.age, person2.membership))
