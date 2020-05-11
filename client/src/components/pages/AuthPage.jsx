import React, { useEffect, useState } from 'react'
import M from 'materialize-css'
import { api } from '../../api/api'

const AuthPage = () => {

const [form, setForm] = useState({text: '', password: ''})

const changeHandler = event => {
  setForm({...form, [event.target.name]: event.target.value })
}

const sendData = (e) => {
  e.preventDefault()
  api.sendPost('/api/auth/register', form)
}

const sendLogin = (e) => {
  e.preventDefault()
  api.sendPost('/api/auth/login', form)
}
 
 useEffect(() => {
  M.AutoInit();
 })

  
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

export default AuthPage