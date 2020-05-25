import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css'
import AddDemoPage from '../demonstrationComponents/AddDemoPage'
import TodoDemoPages from '../demonstrationComponents/TodoDemoPages'


const DemonstrationContent = ({ setStatusContent }) => {

  useEffect(() => {
    M.AutoInit();
   })

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
                <AddDemoPage/>
              </div>
              <div id="showTodo" className="col s12 showTodo">
               <TodoDemoPages/>
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