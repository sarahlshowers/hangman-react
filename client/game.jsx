import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Words from './Words.jsx'
import Guesser from './Guesser.jsx'
import SecretKeeper from './SecretKeeper.jsx'
import GameBoard from './GameBoard.jsx'
import _ from 'lodash'


export default class Game extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.newGame()
  }

  newGame() {
    let word = _.sample(wordsList)
    let strikes = 0
    let guesses = []
    let over = false
    let won = false
    this.setState(word, strikes, guesses, over, won)
  }

  hasWon() {
    let {word, guesses} = this.state
    return !_.chain(word.split(''))
      .map(letter => _.contains(guesses, letter))
      .contains(false)
      .value()
  }

  checkLetter(letter) {
    let {word, strikes, guesses, over, won} = this.state

    if (_.contains(word, letter)) {

    } else {
      strikes++
    }

    guesses.push(letter)

    won = this.hasWon()

    if (strikes >= 6 && !won) {
      strikes = 6
      over = true
    }
    this.setState({strikes, guesses, over, won})
  }

  getStatus() {
    if (this.state.won) {
      return 'You Win'
    } else if (this.state.over) {
      return 'Game over'
    } else {
      return 'Hangman!'
    }
  }

  newGameStatus() {
    let playing = (!this.state.over && !this.state.won)
    return playing ? 'new-game' : 'do you want to play'
  }

  render() {
    return (
      <div>
        <h1>{this.getStatus()}</h1>
        <GameBoard
          won={this.state.won}
          strikes={this.state.strikes}
        />
        <LetterContainer
          word={this.state.word}
          reveal={this.state.over}
          guesses={this.state.guesses}
        />
        <HangmanKeys
          onKeyPress={this.checkLetter}
          enabled={!this.state.over && !this.state.won}
          disabledLetters={this.state.guesses}
        />
        <button
          className={this.newGameStatus()}
          disabled={this.state.over && !this.state.won}
          onClick={this.newGame}>
          Try Again ?
        </button>
        <Guesser />
        <SecretKeeper />
      </div>
    )
  }
}
