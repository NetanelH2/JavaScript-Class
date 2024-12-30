// 1.
let rectangle_1 = 10 * 20
console.log('The Area of the first rectangle is: ' + rectangle_1)

// 2.
let rectangle_2 = 15 * 30
console.log('The Area of the second rectangle is: ' + rectangle_2)

let result =
  rectangle_1 === rectangle_2
    ? 'Both of the rectangles are equal in area'
    : 'The rectangles are not equal in area'

console.log(result)

// 3. Pinhas Exercise
const pinhasYear = 1992
const idanYear = 1988

// אם פינחס גדול מעידן תדפיס לי שגיאה
// אם פינחס קטן מעידן תדפיס לי הכל בסדר

let result2 = pinhasYear > idanYear ? 'Error' : 'OK'
console.log(result2)
