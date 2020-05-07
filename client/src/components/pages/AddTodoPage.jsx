import React from 'react'
import M from 'materialize-css'
import { useEffect, useState } from 'react';

const AddTodoPage = () => {

  useEffect(() => {
    M.AutoInit();
  })

 const [form, setForm] = useState({date: '', todo: '', typeTodo: '', priority: ''})

 const changeHandler = event => {
  setForm({...form, [event.target.name]: event.target.value })
 
}
console.log(form)  
  const handleSubmit = (e) => {
   e.preventDefault()
   console.log(form)
  }


  return(
    <div className = "addTodo">
      <h1>Add todo</h1>
     <form onSubmit = {handleSubmit}>
     <div className = "row">
       <div className="input-field col s10 offset-s1">
         <input type="text"
           name = "date" 
           className="datepicker" 
           onChange={changeHandler}/>
         <label forhtml="datepicker">Дата завдання</label>
        </div> 
      </div>
       <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s10 offset-s1">
              <textarea id="textarea1" 
              name = "todo" 
              className="materialize-textarea"
               onChange={changeHandler}></textarea>
              <label forhtml="textarea1">Опис завдання</label>
            </div>
          </div>
        </form>
      </div>
       <div className="row">
        <div className="input-field col s10 offset-s1">
          <select className="icons" name="typeTodo" onChange={changeHandler}>
            <option value="" disabled selected>Виберіть тип завдання</option>
            <option value="1" name = "typeTodo" data-icon="https://lh3.googleusercontent.com/proxy/QerZSl3OcZZgmqBKcZ4idWAodAtFfzEEmMfuh077_qY15QI4tSOwcZZadgTKLmr8Wje882zvQLUH4dHQDm59r41EsYFsrJ_HD7Ivj8IlfjUtp6iSfCcTWOcLejgdR-_Hf5AMaILy" className="left">Загальні</option>
            <option value="2" name = "typeTodo" data-icon="https://master-prod.s3.eu-central-1.amazonaws.com/organization/75654organization.jpg" className="left">Робота</option>
            <option value="3"  name = "typeTodo" data-icon="https://img.freepik.com/free-photo/_23-2147845946.jpg?size=626&ext=jpg" className="left">Навчання</option>
            <option value="4"  name = "typeTodo"  data-icon="https://traingain.org/multimedia/files_asset/2/5/6/8/52b2d3d5b943b6223620eebdae631f3a_760_500_1.jpg" className="left">Спорт</option>
          </select>
          <label>Images in select</label>
        </div>
        </div>  
        <div className="radioBtn-section row">
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

export default AddTodoPage