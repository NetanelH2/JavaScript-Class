// 1.
const length1 = 10
const width1 = 20
const area1 = length1 * width1
console.log('Area of the first rectangle:', area1, 'cm²')

// 2.
const length2 = 15
const width2 = 30
const area2 = length2 * width2
console.log('Area of the second rectangle:', area2, 'cm²')

// 3.
const isFirstLarger = area1 > area2
const isSecondLarger = area2 > area1
const areEqual = area1 === area2

console.log(
  isFirstLarger
    ? `The first rectangle (${area1} cm²) is larger than the second rectangle (${area2} cm²)`
    : isSecondLarger
    ? `The second rectangle (${area2} cm²) is larger than the first rectangle (${area1} cm²)`
    : `Both rectangles have equal area (${area1} cm²)`,
)

// 4.
const name = 'John Doe'
const age = 25
console.log(`Hello, my name is ${name} and I am ${age} years old.`)
