// 1.
function checkNumber(num) {
  if (num > 0) {
    console.log(`The number ${num} is positive.`)
  } else if (num < 0) {
    console.log(`The number ${num} is negative.`)
  } else {
    console.log(`The number is zero.`)
  }
}

checkNumber(5)
checkNumber(-3)
checkNumber(0)
console.log('\n')

// 2.
const person = {
  firstName: 'John',
  lastName: 'Cohen',
  age: 25,
}

if (person.age >= 18) {
  console.log(
    `${person.firstName} ${person.lastName} is an adult (${person.age} years old).`,
  )
} else {
  console.log(
    `${person.firstName} ${person.lastName} is a minor (${person.age} years old).`,
  )
}
console.log('\n')

// 3.
const students = [
  {firstName: 'Danny', lastName: 'Levi', className: '12th-2', score: 95},
  {firstName: 'Shira', lastName: 'Cohen', className: '11th-1', score: 82},
  {firstName: 'Alon', lastName: 'Israeli', className: '12th-3', score: 75},
  {firstName: 'Michal', lastName: 'Abraham', className: '11th-2', score: 68},
  {firstName: 'Omer', lastName: 'Shemesh', className: '12th-1', score: 55},
]

function getGradeCategory(score) {
  switch (true) {
    case score >= 90 && score <= 100:
      return 'A'
    case score >= 80 && score <= 89:
      return 'B'
    case score >= 70 && score <= 79:
      return 'C'
    case score >= 60 && score <= 69:
      return 'D'
    default:
      return 'F'
  }
}

console.log(
  `${students[0].firstName} ${students[0].lastName}, Class: ${
    students[0].className
  }, Score: ${students[0].score}, Category: ${getGradeCategory(
    students[0].score,
  )}`,
)

console.log(
  `${students[1].firstName} ${students[1].lastName}, Class: ${
    students[1].className
  }, Score: ${students[1].score}, Category: ${getGradeCategory(
    students[1].score,
  )}`,
)

console.log(
  `${students[2].firstName} ${students[2].lastName}, Class: ${
    students[2].className
  }, Score: ${students[2].score}, Category: ${getGradeCategory(
    students[2].score,
  )}`,
)

console.log(
  `${students[3].firstName} ${students[3].lastName}, Class: ${
    students[3].className
  }, Score: ${students[3].score}, Category: ${getGradeCategory(
    students[3].score,
  )}`,
)

console.log(
  `${students[4].firstName} ${students[4].lastName}, Class: ${
    students[4].className
  }, Score: ${students[4].score}, Category: ${getGradeCategory(
    students[4].score,
  )}`,
)

console.log('\n')

// 4.
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true
  } else {
    return false
  }
}

if (isLeapYear(2000)) {
  console.log(`${2000} is a leap year.`)
} else {
  console.log(`${2000} is not a leap year.`)
}

if (isLeapYear(2021)) {
  console.log(`${2021} is a leap year.`)
} else {
  console.log(`${2021} is not a leap year.`)
}
