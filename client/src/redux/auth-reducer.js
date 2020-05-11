const SET_AUTH = 'SET-AUTH'

let initialstate = {
  userId: null,
  token: null,
  isAuth: false
}

const authReducer = (state = initialstate, action) => {
  switch(action.type){
    case SET_AUTH:
     return{
      ...state, ...action.payload
     } 
    default:
     return state
  }
}

export const setAuth = (userId, token, isAuth) => ({type: SET_AUTH, payload: {userId, token, isAuth}})

export default authReducer