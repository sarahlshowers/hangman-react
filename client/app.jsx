import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import _ from 'lodash'
import Game from './components/Game.jsx'
import wordService from '../services/wordService'
import {Provider} from 'react-redux'
import {createStore, dispatch} from 'pure-flux'
import {connectStore} from 'react-pure-flux'
import gameReducer from '../reducers/reducers'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      secretWord: ''
    }
  }

  // return { store: this.props.store } specify contextTypes

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
        <Game word={this.state.secretWord}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={createStore('gameReducer', {words: ''})}>
  <App />
</Provider>,
  document.getElementById('app'))
