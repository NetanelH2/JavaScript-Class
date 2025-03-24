// 1. Working with arrays and error handling
const numbers = [10, 20, 30, 40, 50]

for (let i = 0; i < 8; i++) {
  try {
    if (i >= numbers.length) {
      throw new Error(
        `Index ${i} is out of bounds for array of length ${numbers.length}`,
      )
    }
    console.log(`Element at index ${i}: ${numbers[i]}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}

console.log('---------------------------------')

// 2.
const person = {
  firstName: 'John',
  lastName: 'Doe',
  city: 'Tel Aviv',
}

const keysToCheck = ['firstName', 'lastName', 'city', 'age', 'email', 'phone']

keysToCheck.forEach((key) => {
  try {
    if (person[key] === undefined) {
      throw new Error(`The key "${key}" does not exist in the person object`)
    }
    console.log(`${key}: ${person[key]}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
})
