import React, {Component, PropTypes} from 'react'
import GameBoard from './GameBoard.jsx'
import Keyboard from './Keyboard.jsx'
import LetterSlots from './LetterSlots.jsx'

export default class Game extends Component {
  constructor(props) {
    super(props)
    console.log('the props in my Game', props)
  }

  componentWillReceiveProps() {
    
  }

  componentDidMount() {
    this.newGame()
  }

  newGame() {
    let strikes = 0
    let guesses = []
    let over = false
    let won = false
    this.setState({strikes, guesses, over, won})
    console.log('strikes?', strikes)
    console.log('guesses?', guesses)
    console.log('game over?',over)
  }

  // hasWon() {
  //   let {guesses} = this.state
  //   return !_.chain(word.split(''))
  //     .map(letter => _.contains(guesses, letter))
  //     .contains(false)
  //     .value()
  // }

  // checkLetter(letter) {
  //   let {strikes, guesses, over, won} = this.state
  //
  //   if (_.contains(letter)) {
  //     } else {
  //       strikes++
  //     }
  //     guesses.push(letter)
  //
  //     won = this.hasWon()
  //
  //     if (strikes >= 6 && !won) {
  //       strikes = 6
  //       over = true
  //     }
  //   this.setState({strikes, guesses, over, won})
  // }

  getStatus() {
  if (this.state.won) {
    return 'YOU WON!'
  } else if (this.state.over) {
    return 'Game Over'
  } else {
    return 'hangman :('
  }
}

// newGameClass() {
//   let playing = (!this.state.over && !this.state.won)
//   return playing ? 'new-game' : 'new-game shown'
// }

  render() {
    console.log('do I get props here?', this.props)
    return(
      <div>
        {/* <GameBoard
          won={this.state.won}
          strikes={this.state.strikes}
        /> */}
        <LetterSlots
          word={this.props.word}
          // reveal={this.state.over}
          // guesses={this.state.guesses}
        />
        <Keyboard
          onPress={this.checkLetter}
          // enabled={!this.state.over && !this.state.won}
          // disabledLetters={this.state.guesses}
        />
        {/* <button
          // className={this.newGameClass()}
          // disabled={!this.state.over && !this.state.won}
          onClick={this.newGame}>
          New Game
        </button> */}
        <div>This is a game right?</div>
        {this.props.word}
      </div>
    )
  }
}
