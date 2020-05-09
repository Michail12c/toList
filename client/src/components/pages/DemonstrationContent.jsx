import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css'
import AddTodoPage from './AddTodoPage'
import TodoPage from './TodoPage'


const DemonstrationContent = ({setStatusContent, todo}) => {

  useEffect(() => {
    M.AutoInit();
   })

   if(todo.length !== 0){
     console.log(todo)
   }
  return(
    <div className = 'demonstrationPage'>
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s6"><a class="activeAuth active" href="#addTodo">Додати справу</a></li>
              <li className="tab col s6"><a className="activeAuth"  href="#showTodo">Показати справи</a></li>
            </ul>
          </div>
              <div id="addTodo" className="col s12">
                <AddTodoPage status = {false}/> 
              </div>
              <div id="showTodo" className="col s12 showTodo">
                <TodoPage status = {false}/> 
              </div>
          </div>  
         <button onClick = {() => setStatusContent(false)} className='btn #00796b teal darken-2'>Повернутись</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todo: state.todoPage.todo
  }
}

export default connect(mapStateToProps)(DemonstrationContent)