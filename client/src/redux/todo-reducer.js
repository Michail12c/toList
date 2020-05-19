import { api } from "../api/api"

const SET_TODO = 'SET-TODO'
const DELETE_TODO = 'DELETE-TODO'


let initialState = {
  renderTodo: false,
  todo: []
}

const todoReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_TODO:
      return {
        ...state, 
        todo: action.arr
      }  
    case DELETE_TODO:
      return{
        ...state,
        todo: state.todo.filter(item => item.todo !== action.todo)
      }   
    default:
      return state
  }
}

export const setTodo = arr => ({type: SET_TODO, arr}) 
export const deleteTodoAC = todo => ({type: DELETE_TODO, todo})

export const getTodoThunk = (userId) => async(dispatch) => {
  try{
   const data = await api.getTodo(`/api/todo/${userId}`)
   dispatch(setTodo(data.todo))
  }catch(e){
    console.log(e)
  }
}

export const addTodoThunk = (userId, form) => async(dispatch) => {
  try{
   await api.sendPost(`/api/todo/add/${userId}`, form)
   const data = await api.getTodo(`/api/todo/${userId}`)
   dispatch(setTodo(data.todo))
   return data
  }catch(e){
    console.log(e)
  }
}

export const deleteTodoThunk = (todoCard, userId) => async (dispatch) => {
   try {
    await api.removeTodo(`/api/todo/${todoCard}`)
    const data = await api.getTodo(`/api/todo/${userId}`)
    dispatch(setTodo(data.todo))
   }catch(e){
     console.log(e)
   } 
}

export const updateTodoThunk = (newTodo, userId) => async (dispatch) => {
  try{
    await api.updateTodo(`/api/todo/update`, newTodo)
    const data = await api.getTodo(`/api/todo/${userId}`)
    dispatch(setTodo(data.todo))
  }catch(e){
    console.log(e)
  }
}




export default todoReducer