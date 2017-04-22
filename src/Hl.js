import React, {Component} from 'react'
import hljs from 'highlight.js'
import {Container, Markup, Editor} from 'styled'
import Language from 'Language'


export default class Hl extends Component {

  state = {
    value: ''
  }

  constructor(props) {
    super(props)
    hljs.registerLanguage('language', Language)
    hljs.configure({
      languages: ['language'],
      useBr: true
    })
  }

  change = (e) => {
    let string = e.target.value
    // let reg = /(\n)/g
    // let newString = string.replace(reg, '<br>')
    let div = document.createElement("div")
    let text = document.createTextNode(string)
    div.appendChild(text)
    let html = hljs.highlightAuto(div.innerHTML)
    console.log("html", html)
    this.setState({
      value: e.target.value,
      markup: {
        __html: html.value
      }
    })
  }

  tab = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault()
      e.target.value = e.target.value.concat('\t')
      this.change(e)
    }
  }

  render() {
    return (
      <Container>
        <Editor
          value={this.state.value}
          onChange={this.change}
          onKeyDown={this.tab}
        />
        <Markup
          dangerouslySetInnerHTML={this.state.markup}
        />
      </Container>
    )
  }
}
