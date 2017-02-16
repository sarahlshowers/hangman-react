import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import fetchMethod from './fetchMethod'

export default class Words extends Component {
  constructor() {
    super()
    this.state = {
      wordsList: [],
      fetchExecuted: false
    }
  }

  wordList() {
    const path = `http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words`
    const callback = words => {
      this.setState({
        wordsList: words,
        fetchExecuted: true
      })
    }
    return fetchMethod('GET', path, null).then(callback)
  }

  renderWordList() {
    const {wordsList, fetchExecuted} = this.state
    return fetchExecuted
    ? <Words words={words} />
    : null
  }

  render() {
    return (
      <div>
        <h3> Words Should be here</h3>
        <div>{this.renderWordList()}</div>
      </div>
    )
  }
}
