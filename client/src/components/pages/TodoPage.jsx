import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { constructorContent, getTodo } from '../../common/helper';
import { deleteTodoAC, setTodo, deleteTodoThunk, updateTodoThunk, getTodoThunk } from '../../redux/todo-reducer';


const TodoPage = ({todo, status, deleteTodoAC, userId, deleteTodoThunk, updateTodoThunk, getTodoThunk}) => {

  if(todo.length == 0){
    getTodoThunk(userId)
  }
  
  let taskArr = [],
      projectArr = [],
      ideaArr = []; 
  let contentTask = 'Завдань поки що немає'; 
  let contentProject = 'Проектів поки що немає';
  let contentIdea = 'Ідей поки що немає'; 

  const [statusContent, setStatus] = useState(0)

  const deleteTodo = (todoCard) => {
   /*  deleteTodoAC(todoCard) */
    deleteTodoThunk(todoCard, userId)
  }

  const updateTodo = async (newTodo) => {
     updateTodoThunk(newTodo, userId)
  }

  if(todo.length !== 0){
     todo.map(elem => constructorContent(elem, taskArr, projectArr, ideaArr))
     if(taskArr.length !== 0){
       contentTask = taskArr.map((elem, index) => <Cards deleteTodo = {deleteTodo} todo = {elem.todo} comment = {elem.comment} updateTodo = {updateTodo} priority = {elem.priority}/>) 
     }
     if(projectArr.length !== 0){
      contentProject = projectArr.map((elem, index) => <Cards deleteTodo = {deleteTodo} todo = {elem.todo} comment = {elem.comment} updateTodo = {updateTodo} priority = {elem.priority}/>) 
     }
     if(ideaArr.length !== 0){
      contentIdea = ideaArr.map((elem, index) => <Cards deleteTodo = {deleteTodo} todo = {elem.todo} comment = {elem.comment} updateTodo = {updateTodo} priority = {elem.priority}/>) 
     }
  }

   return (
     <div className = 'section-todoPage'>
        <div className="statistic">
             {statusContent == 0 ? `Всього завдань ${taskArr.length}.` + ` Виконано ${0}.`  : ''}
             {statusContent == 1 ? `Всього проектів ${projectArr.length}.` + ` Виконано ${0}.`: '' }
             {statusContent == 2 ?  `Всього ідей ${ideaArr.length}.` + ` Виконано ${0}.`: '' }
        </div>
        {status ?  <h1> Todo Page</h1> : ''}
      
        <div className = 'todoPage row'>
           <div className = 'menuTodo col s4 m2'>
             <div onClick = {() => setStatus(0)} className = {statusContent == 0 ? 'menuListActive' : 'menuList'}>
                Завдання
             </div>
              <div onClick = {() => setStatus(1)} className = {statusContent == 1 ? 'menuListActive' : 'menuList'}>
                Проекти
              </div>
              <div onClick = {() => setStatus(2)} className = {statusContent == 2 ? 'menuListActive' : 'menuList'}>
                Ідеї
              </div>
           </div>
           <div className = 'contentTodo col s8'>
             {statusContent == 0 ? contentTask : ''}
             {statusContent == 1 ? contentProject : '' }
             {statusContent == 2 ? contentIdea : '' }
           </div>
        </div>
     </div>
   )
}

const Cards = ({todo, comment, priority, deleteTodo, updateTodo}) => {

  const [statusDelete, setDelete] = useState(false)
  const [colorCard, setColorCard] = useState(false)

  let styleCard; 
  switch(priority){
    case '1':
      styleCard = "card #455a64 blue-grey darken-2"
      break
    case '2':
     styleCard = "card #78909c #607d8b blue-grey" 
      break
    case '3':
      styleCard = "card #90a4ae blue-grey lighten-2"
     break 
    case '4': 
      styleCard = "card #4caf50 green"
    break
  }
 const changeColor = (e) => {
   e.preventDefault()
   let name = todo
   updateTodo({name, priority})
   setColorCard(!colorCard)
 }

 const answerDelete = (e) => {
   e.preventDefault()
   setDelete(!statusDelete)
 }

  const deleteCard = (e) => {
    e.preventDefault()
    deleteTodo(todo)
    setDelete(false) 
  }



   return(
     <div className = 'cards'>
        <div className="row">
          <div className="col s12">
            <div className= {styleCard}>
              <div className="card-content white-text">
                <span className="card-title">{todo}</span>
                <p>{comment}</p>
              </div>
              <div className="card-action">
                <a href="#" onClick = {changeColor}>
                   {priority !== '4' ? 'Зроблено' : 'Відмінити'}
                </a>
                {!statusDelete 
                      ? <a href="#" onClick = {answerDelete}>Видалити</a> 
                      : <span>Ви впевненні, що хочете видалити картку?
                            <a href="#" onClick = {(e) => deleteCard(e)}><span className = "deleteYes">так</span></a> 
                            <a href="#" onClick = {answerDelete}>ні</a>
                        </span> 
                }
              </div>
            </div>
          </div>
        </div>
     </div>
   )
}


const mapStateToProps = state => {
  return {
    todo: state.todoPage.todo,
    userId: state.authPage.userId
  }
}


export default connect(mapStateToProps, {deleteTodoAC, setTodo, deleteTodoThunk, updateTodoThunk,getTodoThunk})(TodoPage)