import React, {Component} from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {mount, render, shallow} from 'enzyme'

chai.use(chaiEnzyme())

class App extends Component {
  render () {
    return (
      <Game word={_.sample(this.state.secretWord)}/>
    )
  }
}

Game.propTypes = {
  word: React.PropTypes.string.isRequired
}

class Game extends Component {
  render () {
    return (
      <div>
          {this.props.word}
      </div>
    )
  }
}

const wrapper = mount(<App />, <Game />) 

expect(wrapper).to.containMatchingElement(<Game word='wetly' />)
expect(wrapper).to.not.containMatchingElement(<Game word='12345' />)
