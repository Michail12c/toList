import React from 'react'
import M from 'materialize-css'

const AuthPage = () => {
  M.AutoInit();
  return(
    <div>

<div className="row">
    <div className="col s12">
      <ul className="tabs">
        <li className="tab col s3"><a href="#test1">Ввійти</a></li>
        <li className="tab col s3"><a class="active" href="#test2">Зареєструватись</a></li>
      </ul>
    </div>
        <div id="test1" className="col s12">
          <h1>Ввійти</h1>
        </div>
        <div id="test2" className="col s12">
          <h1>
            Зареєструватись
          </h1>
        </div>
    </div>
        
    </div>
  )
}

export default AuthPage