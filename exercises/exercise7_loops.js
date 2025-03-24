// 1.
let sum = 0
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.error('Even number:', i)
  } else {
    console.log('Odd number:', i)
  }
}
console.log('\n')

// 2.
let countWhile = 20
while (countWhile > 1) {
  console.log(countWhile)
  countWhile--
}
console.log('\n')

// 3.
let countDoWhile = 20
do {
  console.log(countDoWhile)
  countDoWhile--
} while (countDoWhile > 1)
console.log('\n')

// 4.
const myArray = ['Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry', 'Mango']
myArray.forEach(function (item) {
  console.log(item)
})
console.log('\n')

// 5.
const person = {
  name: 'John',
  age: 30,
  city: 'Tel Aviv',
  job: 'Developer',
  hobby: 'Reading',
}

person.city = 'Jerusalem'

for (let key in person) {
  console.log(`${key}: ${person[key]}`)
}
