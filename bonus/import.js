import {manager, employee} from './export.js'

function printPersonDetails(employeeDetails) {
  console.log('This is the person details:')
  for (let key in employeeDetails) {
    console.log(key, ':', employeeDetails[key])
  }
}

printPersonDetails(manager)
printPersonDetails(employee)
