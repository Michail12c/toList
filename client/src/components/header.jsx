import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({isAuth, setInit}) => {
  const logout = () => {
    localStorage.removeItem('auth')
    setInit(false)
  }


  
  return(
    <div className = 'header'> 
      <nav>
        <div className="nav-wrapper #558b2f light-green darken-3">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink  to='/'>Головна</NavLink></li>
            {isAuth ? <li><NavLink to='/add'>Додати</NavLink></li> : ''}
            {isAuth ? <li><NavLink to='/todo'>Завдання</NavLink></li> : ''}
            <li><NavLink to ='/auth'>{!isAuth ? "Ввійти" : <span onClick ={logout}>Вийти</span>}</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    isAuth: state.authPage.isAuth
  }
}


export default connect(mapStateToProps)(Header)