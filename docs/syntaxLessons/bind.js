const dog = {
  smell: 'bad',
  describeSmell:function() {
    return this
  }
}

const unboundDescribe = dog.describeSmell

console.log(unboundDescribe())    //undefined

const boundDescribe = dog.describeSmell.bind(dog)

console.log(boundDescribe())    //{
                                //  smell: 'bad',
                                //  describeSmell: func
                                //}

class Binder {

  constructor() {
    this.boundThing = this.boundThing.bind(this)

    this.boundThing()
    this.unboundThing()

  }

  boundThing() {
    console.log("bound:", this )

  }

  unboundThing() {
    console.log("unbound:", this )
  }


}

let myBinder = new Binder() //bound: Binder {boundThing: func}
                            //unbound: Binder {boundThing: func}
