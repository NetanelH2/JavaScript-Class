// Callback Function

function runMe(arg1) {
  console.log(arg1(2))
}

runMe((myVar) => 5 * myVar)

/*
runMe((myVar) => 5 * myVar)     // Step 1: Pass arrow function
 ↓
arg1(2)                         // Step 2: Call arrow function with 2
 ↓
(2) => 5 * 2                    // Step 3: 2 becomes myVar
 ↓
5 * 2                           // Step 4: Calculate
 ↓
10                              // Step 5: Final result
*/
