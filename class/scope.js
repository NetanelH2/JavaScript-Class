// Single Thread Non-Blocking Event Driven Language - Call Stack

// Local Scope
function tryMeLocal() {
  const myName = 'Netanel Harush'
  return myName
}

console.log(tryMeLocal())
console.log(myName)

// Global Scope
let yourName = 'Pinhas Cohen'

function tryMeGlobal() {
  return yourName
}

console.log(tryMeGlobal())
console.log(yourName)