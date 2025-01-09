// 1.
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log('Error message')
  }
  if (i % 2 !== 0) {
    console.log(i)
  }
}

// 2.
let number = 20

while (number > 0) {
  console.log('The number is: ', number)
  number--
}

// 3.
do {
  console.log('The number is: ', number)
  number--
} while (number > 0)

// 4.
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango']

for (let fruit of fruits) {
  console.log(fruit)
}

// 5.
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  occupation: 'Developer',
}
person.age = 31

for (let key in person) {
  console.log(key, ':', person[key])
}
