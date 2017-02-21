import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import _ from 'lodash'
import Game from './Game.jsx'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      secretWord: ''
    }
  }

  componentDidMount() {
    this.getWord()
  }

  getWord() {
    let path = '/linkedin-reach'
    return $.ajax({ method: 'get', url: path, contentType: 'text/plain' })
      .then(result => {
        let wordSplitter = result.split('\n')
        this.setState({
          secretWord: wordSplitter
        })
      })
  }

  render() {
    return (
      <div>
        <div>Hangman</div>
        <Game word={_.sample(this.state.secretWord)}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
