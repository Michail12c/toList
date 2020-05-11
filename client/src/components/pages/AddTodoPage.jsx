import React from 'react'
import M from 'materialize-css'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setTodo } from '../../redux/todo-reducer';

const AddTodoPage = ({status, setTodo}) => {

  useEffect(() => {
    M.AutoInit();
  })

 const [form, setForm] = useState({todo: '', comment: '', typeTodo: '', priority: ''})

 const changeHandler = event => {
  setForm({...form, [event.target.name]: event.target.value })
} 
  const handleSubmit = (e) => {
   e.preventDefault()
   if(status){
    console.log(form)
   }else{
     setTodo(form)
    console.log('false:', form)  
  }
}


  return(
    <div className = "addTodo">
     {status ? <h1>Add todo</h1> : ''}
     <form onSubmit = {handleSubmit}>
       <div className="row">
        <form className="col s12 heightTodoForm">
          <div className="row">
            <div className="input-field col s10 offset-s1">
              <textarea id="textarea1" 
              name = "todo" 
              className="materialize-textarea"
               onChange={changeHandler}></textarea>
              <label forhtml="textarea1">Назва</label>
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <form className="col s12 heightTodoForm">
          <div className="row">
            <div className="input-field col s10 offset-s1">
              <textarea id="textarea1" 
              name = "comment" 
              className="materialize-textarea"
               onChange={changeHandler}></textarea>
              <label forhtml="textarea1">Коментар</label>
            </div>
          </div>
        </form>
      </div>
       <div className="row">
        <div className="input-field col s10 offset-s1">
          <select className="icons" name="typeTodo" onChange={changeHandler}>
            <option value="" disabled selected>Виберіть тип завдання</option>
            <option value="task" name = "typeTodo" data-icon="https://lh3.googleusercontent.com/proxy/QerZSl3OcZZgmqBKcZ4idWAodAtFfzEEmMfuh077_qY15QI4tSOwcZZadgTKLmr8Wje882zvQLUH4dHQDm59r41EsYFsrJ_HD7Ivj8IlfjUtp6iSfCcTWOcLejgdR-_Hf5AMaILy" className="left">Завдання</option>
            <option value="project" name = "typeTodo" data-icon="https://master-prod.s3.eu-central-1.amazonaws.com/organization/75654organization.jpg" className="left">Проекти</option>
            <option value="idea"  name = "typeTodo" data-icon="https://img.freepik.com/free-photo/_23-2147845946.jpg?size=626&ext=jpg" className="left">Ідеї</option>
          </select>
          <label>Тип завдання</label>
        </div>
        </div>  
        <div className="radioBtn-section row"> 
        <div>
          <label className = 'col s2 offset-s1'>Пріоритет</label>
        </div>
        <form action="#" className = "col s10 offset-s1">
            <p>
              <label>
                <input  value = "1" name="priority" type="radio" onChange = {changeHandler} />
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
          <button type='submit' className='btn'>Додати</button>
        </div>   
       </form> 
    </div>
  )
}
const mapStateToProps = state => {
  return{
    
  }
}


export default connect(mapStateToProps, {setTodo})(AddTodoPage)