import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Game from './Game.jsx'

export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <div>Hangman</div>
        <Game />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
