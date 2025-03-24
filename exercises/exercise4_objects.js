// 1.
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  gender: 'Male',
  currentOccupation: 'Student',
  schoolYears: 12,
}

console.log('\nPerson Details:\n', person)

// 2.
person.hairColor = 'Black'
person.eyeColor = 'Green'

console.log('\nAdding New Properties:\n', person)

// 3.
person.age = 29
person.eyeColor = 'Brown'

console.log('\nChanging Existing Properties:\n', person)
