const SET_TODO_DEMO = 'SET-TODO-DEMO'
const DELETE_TODO = 'DELETE-TODO'
const UPDATE_TODO = 'UPDATE-TODO'
const CANCEL_UPDATE = 'CANCEL-UPDATE'


let initialState = {
  renderTodo: false,
  todo: []
}

const demoReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_TODO_DEMO:
      return {
        ...state, 
        todo: [...state.todo, action.arr]
      }  
    case UPDATE_TODO: 
    return {
      ...state,
      todo: state.todo.map(el => {
        if(el.todo === action.todo){
         return {...el, priority: '4', changeDate: Date.now()} 
        }
        return el
      })
    } 
    case CANCEL_UPDATE:
      return {
        ...state,
        todo: state.todo.map(el => {
          if(el.todo === action.todo){
            return {...el, priority: '1', changeDate: ''}
          }
          return el
        })
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

export const setTodoDemo = arr => ({type: SET_TODO_DEMO, arr}) 
export const updateTodoAC = todo => ({type: UPDATE_TODO, todo})
export const deleteTodoAC = todo => ({type: DELETE_TODO, todo})
export const cancelUpdateAC = todo => ({type: CANCEL_UPDATE, todo})

export default demoReducer