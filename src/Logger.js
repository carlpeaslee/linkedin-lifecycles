import React, {Component} from 'react'


const logLifecycles = (Wrapped) => {

  let methods = ['constructor', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount']

  let oldMethods = {}

  methods.forEach( (method) => {
    if (Wrapped.prototype[method]) {
      oldMethods[method] = Wrapped.prototype[method]
    }
    Wrapped.prototype[method] = function () {
      console.groupCollapsed(method)
      let oldFunction = oldMethods[method]
      if (method === 'componentWillReceiveProps' || 'shouldComponentUpdate'|| 'componentWillUpdate') {
        console.log('nextProps', arguments[0])
      }
      if (method === 'shouldComponentUpdate'|| 'componentWillUpdate') {
        console.log('nextState', arguments[1])
      }
      if (method === 'componentDidUpdate') {
        console.log('prevProps', arguments[0])
        console.log('prevState', arguments[1])
      }
      console.groupEnd()
      if (oldFunction) {
        oldFunction(arguments)
      }
      if (method === 'shouldComponentUpdate' && typeof oldFunction === 'undefined') {
        return true
      }
    }
  })


  Wrapped.prototype.setState = function (partialState, callback) {
    console.groupCollapsed('setState')
    console.log('partialState', partialState)
    console.log('callback', callback)
    console.groupEnd()
    this.updater.enqueueSetState(this, partialState, callback, 'setState')
  }


  return class extends Component {
    constructor(props) {
      super(props)
      console.groupCollapsed('constructor')
      console.log('props', props)
      console.groupEnd()
    }
    render() {
      return (
        <Wrapped
          {...this.props}
        />
      )
    }
  }

}

class Example extends Component {

  state = {
    number: Math.random(),
  }


  componentWillUpdate(nextProps, nextState) {
    console.log("do something here", nextProps, nextState)
  }

  render() {
    return (
      <h2
        onClick={()=>{this.setState({number: Math.random()})}}
      >
        {this.state.number}
      </h2>
    )
  }
}

const Logger = logLifecycles(Example)

export default Logger
