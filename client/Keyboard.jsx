import React, {Component} from 'react'
import _ from 'lodash'

const ROW_ONE = 'abcdefghijklm'.split('')
const ROW_TWO = 'nopqrstuvwxyz'.split('')

export default class Keyboard extends Component {

  handleClick(letter) {
    if (this.props.enabled) {
      this.props.onPress(letter)
    }
  }

  // getButton(letter) {
  //   let disabled = _.includes(this.props.disabledLetters, letter)
  //   return (
  //     <button
  //       key={letter}
  //       onClick={this.handleClick.bind(this, letter)}
  //       disabled={disabled}>
  //       {letter}
  //     </button>
  //   )
  // }

  // getRow(row) {
  //   return (
  //     <div className='button-row' key={row.join('')}>
  //       {row.map(this.getButton)}
  //     </div>
  //   )
  // }

  render() {
    return (
      <div className='keyboard'>
        {/* {[ROW_ONE, ROW_TWO].map(this.getRow)} */}
      </div>
    )
  }
}
