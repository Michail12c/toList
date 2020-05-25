import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import todoReducer from './todo-reducer'
import authReducer from './auth-reducer'
import demoReducer from './demo-reducer'

let reducers = combineReducers({
 todoPage: todoReducer,
 authPage: authReducer,
 demoPage: demoReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store 

export default store 