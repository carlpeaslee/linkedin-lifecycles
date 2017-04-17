import React, { Component } from 'react'

export default class Lifecycles extends Component {


  //class Properties
  static defaultProps = {
    mountingTimer: (()=>{
      let now = Date.now()
      console.log("defaultProps", now - Date.now())
      return now
    })(),
    counter: 0,
  }

  //component methods
  mountingLogger = (lifecycle) => {
    console.log(`${lifecycle}, ${Date.now() - this.props.mountingTimer}`)
  }


  updateLogger = (lifecycle) => {
    console.log(`${lifecycle}, ${Date.now() - this.updateTimer}`)
  }

  incrementCounter = () => {
    this.updateTimer = Date.now()
    this.setState(
      (prevState, props) => {
        this.updateLogger('setState')
        return {
          counter: prevState.counter + 1
        }
      },
      () => {
        this.updateLogger('setState callback')
      }
    )
  }

  //instance properties
  state = {
    counter: (() => {
      this.mountingLogger('initialState')
      return this.props.counter + 1
    })(),
  }

  //mounting
  constructor(props) {
    super(props)
    this.mountingLogger('constructor')
  }

  componentWillMount() {
    this.mountingLogger('componentWillMount')
  }


  render() {
    this.mountingLogger('render (mountingLogger)')
    this.updateLogger('render (updateLogger)')
    return (
      <div>
        <button
          onClick={this.incrementCounter}
        >
          Increment Counter
        </button>
        <h2>
          {this.state.counter}
        </h2>
      </div>
    )
  }

  componentDidMount() {
    this.mountingLogger('componentDidMount')
  }

  //updating
  componentWillReceiveProps(nextProps) {
    this.updateLogger('componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.updateLogger('shouldComponentUpdate')
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    this.updateLogger('componentWillUpdate')
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateLogger('componentDidUpdate')
  }

  //unmounting
  componentWillUnmount() {
    this.updateLogger('componentWillUnmount')

  }


}
