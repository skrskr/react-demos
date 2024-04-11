
import { combineReducers } from 'redux'

import { CounterReducer } from './counterReducer'
import { AuthReducer } from './authReducer'

export const RootReducer = combineReducers({
    authReducer: AuthReducer,
    counterReducer: CounterReducer
})