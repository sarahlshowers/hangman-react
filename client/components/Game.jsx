import React, {Component, PropTypes} from 'react'
import GameBoard from './GameBoard.jsx'
import GameWord from './GameWord.jsx'
// import Keyboard from './Keyboard.jsx'
// import LetterSlots from './LetterSlots.jsx'


export default class Game extends Component {
  constructor(props) {
    super(props)
    console.log('the props in my Game', this.props)
  }

  secretKeeperWord() {
    return <GameWord word={this.props.word}/>
  }

  componentDidMount() {
    this.newGame()
  }

  newGame() {
    console.log('word?', this.secretKeeperWord())
    let word = this.secretKeeperWord()
    let strikes = 0
    let guesses = []
    let over = false
    let won = false
    this.setState({word, strikes, guesses, over, won})
    console.log('word?', this.props.word)
    console.log('strikes?', strikes)
    console.log('guesses?', guesses)
    console.log('game over?',over)
  }
//
//   hasWon() {
//     let {word, guesses} = this.state
//     return !_.chain(word.split(''))
//       .map(letter => _.contains(guesses, letter))
//       .contains(false)
//       .value()
//   }
//
//   checkLetter(letter) {
//     let {word, strikes, guesses, over, won} = this.state
//
//     if (_.contains(word,letter)) {
//       } else {
//         strikes++
//       }
//       guesses.push(letter)
//
//       won = this.hasWon()
//
//       if (strikes >= 6 && !won) {
//         strikes = 6
//         over = true
//       }
//     this.setState({strikes, guesses, over, won})
//   }
//
//   getStatus() {
//   if (this.state.won) {
//     return 'YOU WON!'
//   } else if (this.state.over) {
//     return 'Game Over'
//   } else {
//     return 'hangman :('
//   }
// }
//
// newGameClass() {
//   let playing = (!this.state.over && !this.state.won)
//   return playing ? 'new-game' : 'new-game shown'
// }

  render() {
    return(
      <div>
        {/* <GameBoard
          won={this.state.won}
          strikes={this.state.strikes}
        /> */}
        {/* <LetterSlots
          word={this.state.word}
          reveal={this.state.over}
          guesses={this.state.guesses}
        />
        <Keyboard
          onPress={this.checkLetter}
          enabled={!this.state.over && !this.state.won}
          disabledLetters={this.state.guesses}
        />
        <button
          className={this.newGameClass()}
          disabled={!this.state.over && !this.state.won}
          onClick={this.newGame}> */}
          New Game
        {/* </button> */}
        <div>This is a game right?</div>
        {/* {this.props.word} */}
      </div>
    )
  }
}
