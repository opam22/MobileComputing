import { combineReducers } from 'redux'
import { todos } from './todos'
import { references } from './references'

const rootReducers = combineReducers({todos,references})

export default rootReducers
