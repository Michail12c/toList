import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({isAuth, logout}) => {

  return(
    <div className = 'header'> 
    <div className = 'mobile-menu'>
      <a className='dropdown-trigger top-menu' href='#' data-target='dropdown1'>Меню</a>
        <ul id='dropdown1' className='dropdown-content'>
          <li><NavLink exact activeClassName="headerActive" to='/'>Головна</NavLink></li>
          {isAuth ? <li><NavLink exact activeClassName="headerActive" to='/add'>Додати</NavLink></li> : ''}
          {isAuth ? <li><NavLink exact activeClassName="headerActive" to='/todo'>Завдання</NavLink></li> : ''}
          {isAuth ? <li><NavLink exact activeClassName="headerActive" onClick ={logout}  to='/auth'>Вийти</NavLink></li> : ''}
          {!isAuth ? <li><NavLink exact  activeClassName="headerActive" to='/auth'>Ввійти</NavLink></li> : ''}
        </ul>
    </div>
      <nav>
        <div className="nav-wrapper #558b2f light-green darken-3">
          <a href="#" className="brand-logo style-logo">Записник</a>
          <ul id="nav-mobile" className=" style-menu right">
            <li><NavLink exact activeClassName="headerActive" to='/'>Головна</NavLink></li>
            {isAuth ? <li><NavLink exact activeClassName="headerActive" to='/add'>Додати</NavLink></li> : ''}
            {isAuth ? <li><NavLink exact activeClassName="headerActive" to='/todo'>Завдання</NavLink></li> : ''}
            {isAuth ? <li><NavLink exact activeClassName="headerActive" onClick ={logout}  to='/auth'>Вийти</NavLink></li> : ''}
            {!isAuth ? <li><NavLink exact  activeClassName="headerActive" to='/auth'>Ввійти</NavLink></li> : ''}
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