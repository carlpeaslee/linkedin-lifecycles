
//default arguments

function createGreeting(name, greeting = "Good to see you!") {
  return `Hello ${name}! ${greeting}`
}

console.log(createGreeting('Mehek'))    //"Hello Mehek! Good to see you!"


function homeLister({bedrooms, bathrooms, descriptor = 'Beautiful'}) {
  return `${decriptor}! Must see ${bedroom} bedroom, ${bathroom} bathroom home!`
}

console.log(homeLister({
  bedrooms: 3,
  bathrooms: 2
}))    //"Beautiful! Must see 2 bedroom, 3 bathroom home!"


//rest of the arguments

function raceReport(winner, ...losers) }{
  console.log("The winner is ", winner )
  console.log("Here are the rest: ", losers )
}


let finishers = ['Suzie', 'Maya', 'Nazir']

raceReport(...finishers)
      //"The winner is Suzie"
      //"Here are the rest: " ["Maya", "Nazir"]
