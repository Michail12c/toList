import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import todoReducer from './todo-reducer'
import authReducer from './auth-reducer'

let reducers = combineReducers({
 todoPage: todoReducer,
 authPage: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store 

export default store 