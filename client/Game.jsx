import React, {Component, PropTypes} from 'react'
import $ from 'jquery'
import _ from 'lodash'


export default class HangManGame extends Component {
  constructor(props) {
    super(props)
    console.log('what are my props?', this.props)
    this.state = {
      guesses: []
    }
  }

  gameLogic() {
    return new HangManGameLogic(
      this.props.word,
      this.state.guesses,
    )
  }

  onGuess = guess => {
    if (this.gameLogic().gameOver()) return
    const guesses = this.state.guesses.concat(guess)
    this.setState({guesses})
  }

  render() {
    const gameLogic = this.gameLogic()

    return <div className="HangManGame">
      <HangManMan stageOfDeath={gameLogic.badGuesses().length} />
      <HangManWord letters={gameLogic.letters} guesses={gameLogic.guesses} />
      <HangManMan onGuess={this.onGuess} />
      <Keyboard onPress={this.onGuess} enabled={!this.gameWon && !this.gameOver}/>
      Steps Until Your Demise! {gameLogic.badGuesses().length}
      <br></br>
      {gameLogic.gameOver()}
      Letters to your doom ---> {gameLogic.badGuesses()}
      <br></br>
      {this.props.word}
    </div>
  }
}

HangManGame.propTypes = {
  word: React.PropTypes.string
}

const HangManWord = ({letters, guesses}) => {
  const letterNodes = letters.map((letter, index) =>
    <span className="HangMan-letter" key={index}>
      {guesses.includes(letter) ? letter : ' _ '}
    </span>
  )
  return <div className="HangManWord">{letterNodes}</div>
}

const HangManMan = ({stageOfDeath}) => {
  return <img
    className="HangManMan"
    src={`/images/hangman-${stageOfDeath}.png`}
  />
}

const MAX_BAD_GUESSES = 5


class HangManGameLogic {
  constructor(word, guesses){
    this.word = word
    this.guesses = guesses
    this.letters = this.word.split('')
  }

  badGuesses() {
    console.log('')
    return this.guesses.filter(letter =>
    !this.letters.includes(letter)
    )
  }

  gameWon() {
    return this.letters.every(letter =>
    this.guesses.includes(letter)
    )
  }

  gameLost() {
    return this.badGuesses().length > MAX_BAD_GUESSES
  }

  gameOver() {
    return this.gameWon() || this.gameLost()
  }
}

const ROW_ONE = 'abcdefghijklm'.split('')
const ROW_TWO = 'nopqrstuvwxyz'.split('')

class Keyboard extends Component {

  handleClick(letter) {
    if (this.props.enabled) {
      this.props.onPress(letter)
    }
  }

  getButton(letter, index) {
    return (
      <button
        key={index}
        onClick={this.handleClick.bind(this, letter)}
        >
        {letter}
      </button>
    )
  }

  getRow(row) {
    return (
      <div className='button-row'>
        {row.map(this.getButton.bind(this))}
      </div>
    )
  }

  render() {
    return (
      <div className='keyboard'>
        {[ROW_ONE, ROW_TWO].map(this.getRow.bind(this))}
      </div>
    )
  }
}
