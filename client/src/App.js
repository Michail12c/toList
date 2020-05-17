import React, { useEffect, useState } from 'react';
import './App.css';
import 'materialize-css';
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import MainPage from './components/pages/MainPage';
import AuthPage from './components/pages/AuthPage';
import TodoPage from './components/pages/TodoPage';
import AddTodoPage from './components/pages/AddTodoPage';
import { connect } from 'react-redux';
import { setAuth } from './redux/auth-reducer';



function App({isAuth, setAuth}) {
  const [initialize, setInit] = useState(true)
  let auth = JSON.parse(localStorage.getItem('auth'))
  

  useEffect(() => {
    if(auth){
      setAuth(auth.userId, auth.token, auth.isAuth) 
      return   
    }
    setAuth(null, null, false)
  }, [isAuth, initialize])

  const logout = () => {
    localStorage.removeItem('auth')
    setInit(false)
  } 
 
  
  return (
    <div className="App">
      <Header logout = {logout}/> 
       <div className ='container'>
        <div className = 'test'>    
            <Switch>
              <Route exact path = '/' render = { () => <MainPage/>}/>
              <Route path='/add' render = {() => <AddTodoPage status = {true}/>}/>
              <Route path ='/auth' render = {() => <AuthPage/>}/>
              {isAuth && <Route path='/todo' render = {() => <TodoPage status = {true}/> }/> }
            </Switch>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
const mapStateToProps = state => {
  return{
  isAuth: state.authPage.isAuth
  }
}

export default connect(mapStateToProps, {setAuth})(App);
