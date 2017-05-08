
let tourDeFrance = true
let legs = 27

function spiderLegCounter(numberOfSpiders){
  console.log("original legs: ", legs )
  let legs = 8
  console.log(legs)
  return numberOfSpiders * legs
}

console.log(legs)   // 27

legs = "frog"

console.log(legs) // "original legs: ", undefined
                  // "chicken"


spiderLegCounter(1) // 8
