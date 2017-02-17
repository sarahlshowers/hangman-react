import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import fetchMethod from './fetchMethod'


export default class Words extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wordsList: [],
      fetchExecuted: false
    }
  }

  wordList() {
    let path = '/linkedin-reach'
    const callback = words => {
      console.log('these are words?', words)
      this.setState({
        wordsList: words,
        fetchExecuted: true
      })
    }
    return fetchMethod('GET', path, null, callback)
  }

  componentDidMount() {
    this.wordList()
    const {wordsList, fetchExecuted} = this.state
    console.log({wordsList})
    return fetchExecuted
    ? wordsList.length
    : null
  }

  render() {
    return (
      <div>
        <h3> Words Should be here</h3>
        <div>{this.state.wordsList.length}</div>
      </div>
    )
  }
}
