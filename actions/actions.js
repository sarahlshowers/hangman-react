import {goalReducer} from '../../store/reducers'
import _ from 'lodash'
import App from '../../client/App.jsx'

const state = []

const action = {
  type: gameStart
  payload: _.sample(wordSplitter)
}

const nextState = goal(state, action)
