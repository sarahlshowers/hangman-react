import React, {Component, PropTypes} from 'react'
import GameBoard from './GameBoard.jsx'
// import Keyboard from './Keyboard.jsx'
// import LetterSlots from './LetterSlots.jsx'


export default class Game extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return(
      <div>
        {this.props.word}
      </div>
    )
  }
}
