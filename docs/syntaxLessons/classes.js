class Planty {

  secrets = {
    deep: true
  }

  constructor(type, size = 0) {
    this.type = type
    this.size = size
  }

  introduceYourself(){
    console.log(`Hi, I'm a ${this.size} foot tall ${this.type}`)
  }
}


class Cactus extends Planty {
  constructor(size, spikeFactor) {
    super('cactus', size)
    this.spikeFactor = spikeFactor
  }

  introduceYourself() {
    super.introduceYourself()
    console.log("...and oh yeah, I live a really long time")
  }
}

let lemon = new Planty('lemon', 3)

lemon.introduceYourself()

let saguaro = new Cactus(20, 'YOWZA')

saguaro.introduceYourself()
console.log(saguaro.secrets)


class Clock {
  constructor(timeZone) {
    this.timeZone = timeZone
  }

  get time() {
    console.log("My timezone is ", this.timeZone)
    return Date.now()
  }

  set timeZone(timeZone) {
    this.timeZone = timeZone
  }
}


let myClock = new Clock()

myClock.timeZone = 'CST'

console.log(myClock.time)  //"My timezone is ", "CST"
                          // ~TheCurrentTime~
