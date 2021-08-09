import { combineReducers } from 'redux'
import characterStore from './characters'

const rootReducer = combineReducers({
  characterStore,
})

export default rootReducer
