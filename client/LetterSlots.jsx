import React, {Component} from 'react'
import _ from 'lodash'
import words from '../models/words'

export default class LetterSlots extends Component{

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

  // getSlots() {
  //   let letters = this.props.word.split('');
  //   return letters.map(this.getSlot);
  // }

  render() {
    return (
      <div className='letter-slots'>
        {/* {this.getSlots()} */}
      </div>
    )
  }

}
