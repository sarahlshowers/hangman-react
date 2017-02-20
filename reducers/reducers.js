import {combineReducers} from 'redux'
import _ from 'lodash'


const getWord = (
  state = { words: '' },
  action
) => {
  switch (action.type) {
    case GAME_START:
    return action.payload
    default:
    return state
  }
}

const gameReducer = combineReducers({
  getWord
})


export default gameReducer
