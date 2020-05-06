import React, { useState } from 'react'; 
import { NavLink } from 'react-router-dom';

const Header = () => {
  const {statusAuth, setStatusAuth} = useState(false)
  return(
    <div className = 'header'> 
      <nav>
        <div className="nav-wrapper #558b2f light-green darken-3">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink  to='/'>Головна</NavLink></li>
            {!statusAuth ? <li><NavLink to='/add'>Додати</NavLink></li> : ''}
            {!statusAuth ? <li><NavLink to='/todo'>Завдання</NavLink></li> : ''}
            <li><NavLink to ='/auth'>{!statusAuth ? "Ввійти" : "Вийти"}</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header