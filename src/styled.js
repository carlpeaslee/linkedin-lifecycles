import styled from 'styled-components'

export const Container = styled.div`
  height: 900px;
  width:  500px;
  position: absolute;
  left: 10%;
  border: 1px solid darkgrey;
`

export const Markup = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  color: blue;
  font-size: 18px;
  line-height: 18px;
  font-family: monospace;
  white-space: pre-wrap;
  .hljs-inverse {
    color: red;
    text-decoration: line-through;
  }
  .hljs-character {
    color: green;
  }
`

export const Editor = styled.textarea`
  position: absolute;
  margin: 0;
  border: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  color: transparent;
  z-index: 1;
  outline: 0;
  background-color: transparent;
  font-size: 18px;
  line-height: 18px;
  font-family: monospace;
  caret-color: black;
`
