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

  newGame() {
    console.log("do i work?")
    return new HangManGame(
      this.props.word,
      this.state.guesses,
    )
  }

  gameLogic() {
    console.log("do i work again?")
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
    const badGuessMessage = ['you are toast', 'the time is near', 'say your prayers', 'the zombies are going to eat you', 'you are in trouble', 'okay seriously ']

    return <div className="HangManGame">
      <HangManMan stageOfDeath={gameLogic.badGuesses().length} />
      <HangManWord letters={gameLogic.letters} guesses={gameLogic.guesses} />
      <HangManMan onGuess={this.onGuess} />
      <Keyboard onPress={this.onGuess} enabled={!this.gameWon && !this.gameOver}/>
      {/* MAX_BAD_GUESSES - gameLogic.badGuesses().length + 1 */}
      Steps Until Your Demise! {MAX_BAD_GUESSES - gameLogic.badGuesses().length + 1}
      <div>
        {badGuessMessage[MAX_BAD_GUESSES - gameLogic.badGuesses().length + 1]}
      </div>
      <div>
        {gameLogic.gameOver()}
      </div>
      <div>
        Letters to your doom ---> {gameLogic.badGuesses()}
      </div>
      <div>
        {this.props.word}
      </div>
      <button onClick={() => {this.newGame()}}>Restart Game</button>
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
    console.log('props here?', this)
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
