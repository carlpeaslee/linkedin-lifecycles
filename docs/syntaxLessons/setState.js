
//quick syntax
this.setState({quesadilla: "cheese"})

//quicker syntax
let quesadilla = 'cheese'
this.setState({quesadilla})

//expanded syntax


this.setState(
  (prevState, props) => {       // a function with
                                //access to prevState and props
    return {                    //that returns the change as an oject

    }
  },
  ()=>{
    //a callback function that runs
    //after the state changes take effect
  }
)
