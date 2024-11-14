const student1 = {
    firstName: 'John',
    lastName: 'Doe',
    class: 'Math',
    score: 85,
}

const student2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    class: 'Science',
    score: 92,
}

const student3 = {
    firstName: 'Emily',
    lastName: 'Johnson',
    class: 'History',
    score: 78,
}

const student4 = {
    firstName: 'Michael',
    lastName: 'Brown',
    class: 'English',
    score: 88,
}

const student5 = {
    firstName: 'Sarah',
    lastName: 'Davis',
    class: 'Art',
    score: 95,
}
function checkStudentGrade(student) {
    switch (true) {
        case student.score >= 90:
            console.log(
                student.firstName + ' ' + student.lastName + ' grade is: A',
            )
            break
        case student.score >= 80:
            console.log(
                student.firstName + ' ' + student.lastName + ' grade is: B',
            )
            break
        case student.score >= 70:
            console.log(
                student.firstName + ' ' + student.lastName + ' grade is: C',
            )
            break
        case student.score >= 60:
            console.log(
                student.firstName + ' ' + student.lastName + ' grade is: D',
            )
            break
        case student.score < 60:
            console.log(
                student.firstName + ' ' + student.lastName + ' grade is: F',
            )
            break
        default:
            console.log('Invalid Score Number')
            break
    }
}

checkStudentGrade(student1)
checkStudentGrade(student2)
checkStudentGrade(student3)
checkStudentGrade(student4)
checkStudentGrade(student5)
