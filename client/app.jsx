import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>Hangman</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
