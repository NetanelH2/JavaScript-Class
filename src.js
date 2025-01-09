// Loops

// For-Loop
//    START  ;  STOP  ; STEP
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log('For Loop:', i)
  }
}

// While-Loop

// START
let i = 1
//      STOP
while (i <= 5) {
  if (i % 2 === 0) {
    console.log('While Loop:', i)
  }
  // STEP
  i++
}

// while (true) {
//   console.log('Infinite Loop')
// }

//Do-While Loop
let j = 1000
do {
  console.log('While Loop:', j)
  j++
} while (j <= 5)

// Object Loop - For in Loop
const person = {
  firstName: 'Netanel',
  lastName: 'Harush',
  age: 30,
}

//       key in object
for (let key in person) {
  console.log(key + ': ' + person[key])
}

// Object Array - For of loop
const array = ['A', 'B', 'C', 'Idan', 'E'] // index = 4

for (let value of array) {
  console.log(value)
}

for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}
