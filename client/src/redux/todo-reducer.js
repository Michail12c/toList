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
        todo: [...state.todo, action.arr]
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



export default todoReducer