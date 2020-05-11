import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import { api } from '../../api/api'
import {setAuth} from '../../redux/auth-reducer'
import M from 'materialize-css'


const AuthPage = ({setAuth, isAuth}) => {

const [form, setForm] = useState({text: '', password: ''})

const changeHandler = event => {
  setForm({...form, [event.target.name]: event.target.value })
}

const sendData = (e) => {
  e.preventDefault()
  api.sendPost('/api/auth/register', form)
}

const sendLogin = async (e) => {
     e.preventDefault()
  try {
    const data = await api.sendPost('/api/auth/login', form)
    let isAuth = !!data.token
    localStorage.setItem('auth', JSON.stringify({userId: data.userId, token: data.token, isAuth: isAuth}))
    setAuth( data.userId, data.token, isAuth)
  } catch (e) {
    console.log(e)
  }

}
 
 useEffect(() => {
  M.AutoInit();
 })

 if(isAuth){
  return <Redirect to='/todo'/>
}
  
    return(
      <div className = 'authPage'>
        <div className="row">
            <div className="col s12  inner-authPage">
              <ul className="tabs">
                <li className="tab col s6"><a className="activeAuth active " href="#login">Реєстрація</a></li>
                <li className="tab col s6"><a className="activeAuth" href="#register">Ввійти</a></li>
              </ul>
            </div>
                <div id="login" className="col s12 section-auth">
                <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s8 offset-s2">
                          <input id="text" 
                          type="text" 
                          className="validate" 
                          name ="text" 
                          onChange = {changeHandler}
                          required/>
                          <label htmlFor="text">Логін</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s8 offset-s2">
                          <input id="password"
                           type="password"  
                           className="validate" 
                           name="password" 
                           onChange = {changeHandler}
                           required/>
                          <label htmlFor="password">Пароль</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s8 offset-s2">
                          <input id="password"
                           type="password" 
                           className="validate" 
                           name = "password" 
                           onChange = {changeHandler}
                           required/>
                          <label htmlFor="password">Пароль</label>
                        </div>
                      </div>
                      <span className = "passwordForget"><a href="">Забули пароль?</a></span>
                      <button onClick= {sendData} className="waves-effect btn send-auth">Відправити</button>
                    </form>
               
                  </div>
                </div>
  
  
                <div id="register" className="col s12 section-auth">
                   <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s8 offset-s2">
                          <input id="text" 
                          type="text" 
                          className="validate" 
                          name="text"
                          onChange= {changeHandler}
                           requier/>
                          <label htmlFor="text">Login</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s8 offset-s2">
                          <input id="password"
                           type="password" 
                           name="password" 
                           className="validate" 
                           onChange = {changeHandler}
                           required/>
                          <label htmlFor="password">Password</label>
                        </div>
                      </div>
                      <button  onClick= {sendLogin} className="waves-effect btn send-auth">Відправити</button>
                    </form>
                  </div>
                </div>
            </div>  
      </div>
    )
}
const mapStateToProps = state => {
  return{
  isAuth: state.authPage.isAuth
  }
}
export default connect(mapStateToProps, {setAuth})(AuthPage)