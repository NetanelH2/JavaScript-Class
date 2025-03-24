class Square {
  constructor(side) {
    this.side = side
  }

  getArea() {
    return this.side * this.side
  }
}

const square1 = new Square(4)
console.log(`Square 1 Area = ${square1.getArea()} square units`)
const square2 = new Square(7)
console.log(`Square 2 Area = ${square2.getArea()} square units`)
console.log('---------------------------------')

// 2.
class BankAccount {
  #balance

  constructor(initialBalance = 0) {
    this.#balance = initialBalance
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error('Deposit amount must be positive')
    }
    this.#balance += amount
    return this.#balance
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be positive')
    }
    if (amount > this.#balance) {
      throw new Error('Insufficient funds')
    }
    this.#balance -= amount
    return this.#balance
  }

  getBalance() {
    return this.#balance
  }
}

const account = new BankAccount(1000)
console.log(`Initial balance: ${account.getBalance()}`)
account.deposit(500)
console.log(`After deposit: ${account.getBalance()}`)
account.withdraw(200)
console.log(`After withdrawal: ${account.getBalance()}`)
console.log('---------------------------------')

// 3.
class Vehicle {
  constructor(brand, maxSpeed) {
    this.brand = brand
    this.maxSpeed = maxSpeed
  }

  displayInfo() {
    return `Brand: ${this.brand}, Max Speed: ${this.maxSpeed} km/h`
  }
}

class Car extends Vehicle {
  constructor(brand, maxSpeed, color) {
    super(brand, maxSpeed)
    this.color = color
  }

  displayInfo() {
    return `${super.displayInfo()}, Color: ${this.color}`
  }
}

const myCar = new Car('Toyota', 200, 'Blue')
console.log(myCar.displayInfo())
console.log('---------------------------------')

// 4.
class Shape {
  area() {
    return 0
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }

  area() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  area() {
    return Math.PI * this.radius ** 2
  }
}

const shapes = [
  new Rectangle(5, 4),
  new Circle(3),
  new Rectangle(2, 7),
  new Circle(5),
]

shapes.forEach((shape, index) => {
  console.log(`Shape ${index + 1} area: ${shape.area()}`)
})
