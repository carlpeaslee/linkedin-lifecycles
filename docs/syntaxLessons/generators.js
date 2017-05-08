function * myGenerator(firstValue){
  let index = firstValue
  console.log("firstValue", firstValue )
  while (index < 10) {
    index += (yield index)
  }
}

let iter = myGenerator(2)

console.log(iter.next(1))
console.log(iter.next(2))
