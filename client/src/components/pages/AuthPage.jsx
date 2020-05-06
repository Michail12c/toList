import React from 'react'
import M from 'materialize-css'

class AuthPage extends React.Component {
 
  componentDidMount(){
    M.AutoInit();
  }
  
  render(){
    return(
      <div className = 'authPage'>
        <div className="row">
            <div className="col s12  inner-authPage">
              <ul className="tabs">
                <li className="tab col s6"><a className="active " href="#login">Ввійти</a></li>
                <li className="tab col s6"><a  href="#register">Реєстрація</a></li>
              </ul>
            </div>
                <div id="login" className="col s12 section-auth">
                <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s8 offset-s2">
                          <input id="text" type="text" className="validate" required/>
                          <label for="text">Логін</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s8 offset-s2">
                          <input id="password" type="password" className="validate" required/>
                          <label for="password">Пароль</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s8 offset-s2">
                          <input id="password" type="password" className="validate"  required/>
                          <label for="password">Пароль</label>
                        </div>
                      </div>
                      <button type="submit" className="waves-effect btn send-auth">Відправити</button>
                    </form>
                  </div>
                </div>
  
  
                <div id="register" className="col s12 section-auth">
                             <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s8 offset-s2">
                          <input id="password" type="password" className="validate" required/>
                          <label for="password">Password</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s8 offset-s2">
                          <input id="email" type="email" className="validate" requier/>
                          <label for="email">Email</label>
                        </div>
                      </div>
                      <button type="submit" className="waves-effect btn send-auth">Відправити</button>
                    </form>
                  </div>
                </div>
            </div>  
      </div>
    )
  }
}

export default AuthPage