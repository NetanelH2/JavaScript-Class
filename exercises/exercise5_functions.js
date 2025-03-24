function multiply(num1, num2) {
  return num1 * num2
}
console.log(`The multiplication of 5 and 6 is: ${multiply(5, 6)}\n`)

// 2.
function sum(num1, num2) {
  return num1 + num2
}
console.log(`The sum of 7 and 8 is: ${sum(7, 8)}\n`)

// 3.
function personalGreeting(name) {
  return `Hello ${name}, have a wonderful day!`
}
console.log(personalGreeting('Yossi'))

// 4.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}
console.log(
  `\n25 degrees Celsius is ${celsiusToFahrenheit(25)} degrees Fahrenheit\n`,
)

// 5.
function checkDiscountEligibility(person) {
  if (person.age >= 18 && person.membership) {
    console.log(
      `${person.firstName} ${person.lastName} is eligible for a discount.{person.age}, Club Membership: ${person.membership}`,
    )
  } else {
    console.log(
      `${person.firstName} ${person.lastName} is not eligible for a discount.`,
    )
  }
}

const person1 = {
  firstName: 'Israel',
  lastName: 'Israeli',
  age: 25,
  membership: true,
}

const person2 = {
  firstName: 'Sarah',
  lastName: 'Cohen',
  age: 17,
  membership: false,
}

checkDiscountEligibility(person1)
checkDiscountEligibility(person2)
