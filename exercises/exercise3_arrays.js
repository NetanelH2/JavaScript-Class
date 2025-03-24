const favoriteFruits = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Orange']

// 1.
const thirdFruit = favoriteFruits[2]

console.log('My favorite fruits:', favoriteFruits)
console.log('My third favorite fruit:', thirdFruit)

console.log('Number of favorite fruits:', favoriteFruits.length)

// 2.
console.log('\nModifying the array:')
console.log('Original array:', favoriteFruits)

favoriteFruits.push('Watermelon')
console.log('After adding Watermelon:', favoriteFruits)

const removedFruit = favoriteFruits.pop()
console.log('After removing Watermelon', favoriteFruits)

console.log('\nFinal list of favorite fruits:', favoriteFruits)
