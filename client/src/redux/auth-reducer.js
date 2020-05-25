import { api } from "../api/api"

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

export const loginThunk = (form) => async (dispatch) => {
  try{
    const data = await api.sendPost('/api/auth/login', form)
    let isAuth = !!data.token
    sessionStorage.setItem('auth', JSON.stringify({userId: data.userId, token: data.token, isAuth: isAuth,}))
    dispatch(setAuth( data.userId, data.token, isAuth))
  }catch(e){
    console.log(e) 
  }
}

export const registerThunk = (form) => async (dispatch) => {
  try{
    await api.sendPost('/api/auth/register', form)
  }catch(e){
    console.log(e)
  }
}

export default authReducer