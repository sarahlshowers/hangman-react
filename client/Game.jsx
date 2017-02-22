import React, {Component, PropTypes} from 'react'
import GameBoard from './GameBoard.jsx'
import Keyboard from './Keyboard.jsx'

export default class Game extends Component {
  render() {
    return(
      <div>
        {this.props.word}
      <button onclick={this.newGame()}>
      </button>
    </div>
    )
  }
}

class GameLogic extends Component {
  constructor(props) {
    super(props)
    console.log('the props in my Game', props)
    let word
    let strikes
    let guesses
    let over
    let won
    this.state = {
      word: this.props.word,
      strikes: 0,
      guesses: [],
      over: false,
      won: false
    }
    console.log('word?', word)
    console.log('strikes?', strikes)
    console.log('guesses?', guesses)
    console.log('game over?',over)
  }

  componentWillMount() {
    this.newGame()
  }

  newGame() {
    this.setState({word, strikes, guesses, over, won})
  }

  getSlot(letter, index) {
    let {guesses, reveal} = this.props;
    let classNames = ['letter-slot'];
    let contents = _.contains(guesses, letter) ? letter : ' ';

    if (contents === ' ' && reveal) {
      classNames.push('revealed');
      contents = letter;
    }
    return (
      <div
        key={index}
        className={classNames.join(' ')}>
        {contents}
      </div>
    )
  }

  getSlots() {
    let letters = this.props.word.split('');
    return letters.map(this.getSlot);
  }

  hasWon() {
    let {guesses} = this.state
    return !_.chain(word.split(''))
      .map(letter => _.contains(guesses, letter))
      .contains(false)
      .value()
  }

  checkLetter(letter) {
    if (_.contains(letter)) {
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
    return 'YOU WON!'
  } else if (this.state.over) {
    return 'Game Over'
  } else {
    return 'hangman :('
  }
}

newGameClass() {
  let playing = (!this.state.over && !this.state.won)
  return playing ? 'new-game' : 'new-game shown'
}

  render() {
    console.log('do I get state here?', this.state, this.props)
    return(
      <div>
        <GameBoard
          won={this.state.won}
          strikes={this.state.strikes}
        />
        <div className='letter-slots'>
          {this.getSlots()}
        </div>
        <Keyboard
          onPress={this.checkLetter}
          enabled={!this.state.over && !this.state.won}
          disabledLetters={this.state.guesses}
        />
        <button
          className={this.newGameClass()}
          disabled={!this.state.over && !this.state.won}
          onClick={this.newGame}>
          New Game
        </button>
        <div>This is a game right?</div>
        {this.props.word}
      </div>
    )
  }
}
