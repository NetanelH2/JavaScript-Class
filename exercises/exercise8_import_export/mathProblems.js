import {add, subtract, multiply, divide} from './utils.js'

// 1. Calculate total cost
function calculateTotalCost() {
  const price1 = 25
  const price2 = 30

  console.log(`Item 1: ${price1}₪`)
  console.log(`Item 2: ${price2}₪`)
  console.log(`Total cost: ${add(price1, price2)}₪`)
  console.log('-------------------')
}
calculateTotalCost()

// 2. Calculate change after purchase
function calculateChange() {
  const totalPrice = 75
  const amountPaid = 100

  console.log(`Total price: ${totalPrice}₪`)
  console.log(`Amount paid: ${amountPaid}₪`)
  console.log(`Change: ${subtract(amountPaid, totalPrice)}₪`)
  console.log('-------------------')
}
calculateChange()

// 3. Calculate total price with quantity
function calculateBulkPrice() {
  const unitPrice = 12.5
  const quantity = 6

  console.log(`Unit price: ${unitPrice}₪`)
  console.log(`Quantity: ${quantity}`)
  console.log(`Total price: ${multiply(unitPrice, quantity)}₪`)
  console.log('-------------------')
}
calculateBulkPrice()

// 4. Calculate price per person
function calculatePricePerPerson() {
  const totalBill = 450
  const people = 5

  console.log(`Total bill: ${totalBill}₪`)
  console.log(`Number of people: ${people}`)
  console.log(`Each person pays: ${divide(totalBill, people)}₪`)
}
calculatePricePerPerson()
