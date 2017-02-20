import React, {Component} from 'react'
import {Route, IndexRoute} from 'react-router'
import {wordService} from '../services/wordService'
import {App, Game, GameBoard, Keyboard, LetterSlots} from './components'

export default (store) => {
  store = createStore(gameReducer, initialState, f => f));
}

  return (
    <Route path="/" component={App}>
      <IndexRoute component={App} fetchData={wordService} />
      <Route path="startGame" component={newGame} />
      <Route path="gameOver" component={newGameClass} />
    </Route>
  )
}
