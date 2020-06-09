import React, { useState } from 'react'; 
import { api } from '../../api/api';
import { useEffect } from 'react';
import M from 'materialize-css'; 

const Contacts  = () => {
  
  useEffect(() => {
    M.AutoInit()
  })
  const [form, setForm] = useState({first_name: '', last_name: '', email: '', text: ''})
  const [disabled, setDisabled] = useState(false); 

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value })
  } 

  const sendForm = async (event) => {
    event.preventDefault()
    if(!form.first_name || !form.last_name || !form.email || !form.text){
      return window.M.toast({html: "Всі поля форми мають бути заповненні"})
    }
    setDisabled(true)
    let response =  await api.sendPost('/api/todo/send', form); 
    if(response.message !== 200){
      setDisabled(false)
      return window.M.toast({html:response.message})
    }
    setForm({first_name: '', last_name: '', email: '', text: ''})
    window.M.toast({html: 'Ваше повідомлення успішно відправлено. Дякую'})
    setDisabled(false)
  }


  return (
      <div className='contacts-section'>
        <div className="row">
          <form className="col s12 offset-l2">
            <div className="row">
              <div className="input-field col s6 l4">
                <input 
                   id="first_name" 
                   name='first_name' 
                   type="text"
                   value= {form.first_name} 
                   className="validate" 
                   onChange={changeHandler}
                   required/>
                <label for="first_name">First Name</label>
                <span class="helper-text" data-error="Це поле має бути заповнено"></span>
              </div>
              <div className="input-field col s6 l4">
                <input 
                  id="last_name" 
                  name='last_name' 
                  type="text" 
                  value={form.last_name}
                  className="validate" 
                  onChange={changeHandler}
                  required/>
                <label for="last_name">Last Name</label>
                <span class="helper-text" data-error="Це поле має бути заповнено"></span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 l8">
                <input 
                   id="email" 
                   type="email" 
                   value={form.email}
                   className="validate" 
                   onChange={changeHandler}
                   name='email' 
                   required/>
                <label for="email">Email</label>
                <span class="helper-text" data-error="Це поле повинно містити електронну адресу"></span>
              </div>
            </div>
                <div className="row">
                  <div className="input-field col s12 l8">
                    <textarea 
                       id="text" 
                       value={form.text}
                       name='text' 
                       onChange={changeHandler}
                       className="materialize-textarea validate" 
                       required></textarea> 
                    <label for="text">Повідомлення</label>
                    <span class="helper-text" data-error="Це поле має бути заповнено"></span>
                  </div>
                </div>
                <div className='row'>
                  <div className="input-field col s12 l8">
                    { !disabled
                        ? <button  type='submit' onClick = {sendForm} className="waves-effect btn send-form">Відправити</button>
                        : <button  type='submit' disabled onClick = {sendForm} className="waves-effect btn send-form">Відправити</button>
                    }
                  </div>    
                </div>              
          </form>
        </div>
     </div>
  )
}

export default Contacts