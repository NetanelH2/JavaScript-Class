// Function Declaration - Hoisting

// console.log(sayMyName('Netanel'))

// function sayMyName(name) {
//     return 'My name is: ' + name
// }

// // Function Expression

let dream = function () {
    console.log('My name is Maor Edri')
}
dream()

function addTwoNumbers2(a, b) {
    return a + b
}
addTwoNumbers2(7, 2)

let addTwoNumbers = (a, b) => a + b
addTwoNumbers(1, 5)

let malbel = {
    x: 5,
    y: 10,
    calculate: (x, y) => x * y,
}

console.log(malbel.calculate())
