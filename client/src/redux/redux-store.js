import {createStore, combineReducers} from 'redux'
import todoReducer from './todo-reducer'
import authReducer from './auth-reducer'

let reducers = combineReducers({
 todoPage: todoReducer,
 authPage: authReducer
})

let store = createStore(reducers)

window.store = store 

export default store 