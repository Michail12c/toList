import React from 'react'
import M from 'materialize-css'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addTodoThunk } from '../../redux/todo-reducer';
import idea from '../../image/idea.jpg'
import project from '../../image/project.jpg'
import task from '../../image/training.jpg'
import { setTodoDemo } from '../../redux/demo-reducer';

const AddDemoPage = ({setTodoDemo}) => {

  useEffect(() => {
    M.AutoInit();
  })
 
 const [form, setForm] = useState({todo: '', comment: '', typeTodo: 'task', priority: '1', date: Date.now()})
 const [disabled, setDisabled] = useState(false)


 const changeHandler = event => {
  setForm({...form, [event.target.name]: event.target.value })
} 
 
let setTodo = (data) => {
  setTimeout(setTodoDemo(data), 1000 )
}

  const handleSubmit = async (e) => {
      e.preventDefault()
      setDisabled(true) 
      await setTodo(form)
      setForm({ todo: '', comment: '', typeTodo: 'task', priority: '1' })
      window.M.toast({html: 'Завдання додано'})
      setDisabled(false) 
}


  return(
    <div className = "addTodo">
    <h3>Додати задачу</h3> 
     <form onSubmit = {handleSubmit}>
       <div className="row">
        <form className="col s12 heightTodoForm">
          <div className="row">
            <div className="input-field col s10 offset-s1">
              <input id="todo" 
                name = "todo" 
                type="text"
                value = {form.todo}
                className="validate"
                required
                onChange={changeHandler}/>
              <label forhtml="todo">Назва</label>
              <span className="helper-text" data-error="Це поле має бути заповнено"></span>
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <form className="col s12 heightTodoForm">
          <div className="row">
            <div className="input-field col s10 offset-s1">
              <input id="comment" 
              type ="text"
              name = "comment" 
              value = {form.comment}
               onChange={changeHandler}/>
              <label forhtml="textarea1">Коментар</label>
            </div>
          </div>
        </form>
      </div>
       <div className="row">
        <div className="input-field col s10 offset-s1 selectSection">
          <select className="icons" type="radio" name="typeTodo" value = {form.typeTodo} onChange={changeHandler} >
            <option value="" disabled>Виберіть тип завдання</option>
            <option value="task" selected  name = "typeTodo" data-icon= {task} className="left">Завдання</option>
            <option value="project" name = "typeTodo" data-icon={project} className="left">Проекти</option>
            <option value="idea"  name = "typeTodo" data-icon={idea} className="left">Ідеї</option>
          </select>
          <label> Тип завдання</label>
        </div>
        </div>  
        <div className="radioBtn-section row"> 
        <div>
          <label className = 'col s2 offset-s1'>Пріоритет</label>
        </div>
        <form action="#" className = "col s10 offset-s1">
            <p>
              <label>
                <input  value = "1" name="priority" checked type="radio" onChange = {changeHandler} />
                <span>Високий</span>
              </label>
            </p>
            <p>
              <label>
                <input value = "2"  name="priority" type="radio" onChange = {changeHandler}/>
                <span>Середній</span>
              </label>
            </p>
            <p>
              <label>
                <input  value = "3"  name="priority" type="radio" onChange = {changeHandler} />
                <span>Низький</span>
              </label>
            </p>
          </form>
        </div>
        <div className = 'addTodoBtn'>
          {!disabled
              ? <button type='submit'  className='btn add-btn'>Додати</button>
              : <button type='submit' disabled className='btn add-btn'>Додати</button>
           }
        </div>   
       </form> 
    </div>
  )
}
const mapStateToProps = state => {
  return{
   
  }
}

export default connect(mapStateToProps, { setTodoDemo })(AddDemoPage)