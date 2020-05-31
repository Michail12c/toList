import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import {loginThunk, registerThunk} from '../../redux/auth-reducer'
import M from 'materialize-css'


const AuthPage = ({isAuth, loginThunk, registerThunk}) => {

const [form, setForm] = useState({text: '', password: ''})
const [disabled, setDisabled] = useState(false)

const changeHandler = event => {
  setForm({...form, [event.target.name]: event.target.value })
}

const sendData = async (e) => {
  e.preventDefault()
  setDisabled(true)
  let response =  await registerThunk(form)
  setForm({form, text: '', password: ''})
  window.M.toast({html: response.message})
  setDisabled(false)
}

const sendLogin = async (e) => {
    e.preventDefault()
    setDisabled(true)
    let response = await loginThunk(form)
    setForm({form, text: '', password: ''})
    window.M.toast({html: response})
    setDisabled(false)
}
 
 useEffect(() => {
  M.AutoInit();
 })

 if(isAuth){
  return <Redirect to='/'/>
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
                        <div className="input-field col s12 l8 offset-l2">
                          <input id="text" 
                          type="text" 
                          className="validate" 
                          name ="text" 
                          value = {form.text}
                          onChange = {changeHandler}
                          required/>
                          <label htmlFor="text">Логін</label>
                          <span class="helper-text" data-error="Це поле має бути заповнено"></span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 l8 offset-l2">
                          <input id="password"
                           type="password"  
                           className="validate" 
                           name="password" 
                           value = {form.password}
                           onChange = {changeHandler}
                           required/>
                          <label htmlFor="password">Пароль</label>
                          <span class="helper-text" data-error="Це поле має бути заповнено"></span>
                        </div>
                      </div>
                      <span className = "passwordForget"><a href="">Забули пароль?</a></span>
                      { !disabled
                           ? <button  onClick= {sendData} className="waves-effect btn send-auth">Відправити</button>
                           : <button disabled className="waves-effect btn send-auth">Відправити</button>                    
                       }
                    </form>
               
                  </div>
                </div>
  
  
                <div id="register" className="col s12 section-auth">
                   <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s12 l8 offset-l2">
                          <input id="text" 
                          type="text" 
                          className="validate" 
                          name="text"
                          value = {form.text}
                          onChange= {changeHandler}
                          required />
                          <label htmlFor="text">Login</label>
                          <span class="helper-text" data-error="Це поле має бути заповнено"></span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 l8 offset-l2">
                          <input id="password"
                           type="password" 
                           name="password" 
                           value = {form.password}
                           className="validate" 
                           onChange = {changeHandler}
                           required/>
                          <label htmlFor="password">Password</label>
                          <span class="helper-text" data-error="Це поле має бути заповнено"></span>
                        </div>
                      </div>
                       { !disabled
                           ? <button  onClick= {sendLogin} className="waves-effect btn send-login">Відправити</button>
                           : <button disabled  className="waves-effect btn send-login">Відправити</button>                    
                       }
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

export default connect(mapStateToProps, { loginThunk, registerThunk })(AuthPage)