import React from 'react' 
import M from 'materialize-css'
import { useEffect } from 'react'
import task from '../../../image/training.jpg'
import project from '../../../image/project.jpg'
import idea from '../../../image/idea.jpg'

const Badges = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <div>
      <ul class="collapsible">
        <li className="active">
          <div class="collapsible-header">
            Завдання
            <span class="badge">тип 1</span></div>
            <div class="collapsible-body">
              <div className="section-task-badge">
              <p className = 'section-barge'>
              <span>Завдання - це там де думати не потрібно, а просто взяти і зробити.</span> Завдання повинно бути простим, ясно сформульованим. Такі задачі продумуються завчасно, коли людина перебуває у високоусвідомленому стані, тому коли справа доходить до реалізації вона вже має алгоритм для їхнього  вирішення. Завдання можуть бути виконанні нашою "внутрішньою мавпочкою" без глибокої концентрації, майже механічно.    
              </p> 
             <span ><img className='badge-task-img'  src= {project} alt=""/></span>
            </div>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            Проект
            <span class="badge">тип 2</span></div>
          <div class="collapsible-body">
          <div className="section-task-badge">
              <p className = 'section-barge'>
              <span>Проект - це задача, яку необхідно зробити, але поки що незрозуміло як.</span> Тобто, пошук механізмів для її вирішення потребує глибокого і послідовного обдумування. Проект не можна зробити за один раз, його реалізація потребує вироблення стратегій, їх тестування і аналізу. До роботи над задачами зі списку проектів краще приступатив в стані високої усвідомленності, коли "внутрішню мавпочку" відтісняє "раціональний тип".     
              </p> 
             <span ><img className='badge-task-img'  src= {task} alt=""/></span>
            </div>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
             Ідея
            <span class="badge">тип 3</span></div>
          <div class="collapsible-body">
          <div className="section-task-badge">
              <p className = 'section-barge'>
                <span>Ідея - це завдання про яке іще не зрозуміло чи потрібно його виконувати. </span> Ідея потребує уточнення, глибшого вивчення, консультацій із людьми, які вже займалися цією справою. До цього списку не варто звертатися часто, лише в хвилини високого творчого піднесення і сильної зосередженості, коли проаналізувавши всю наявну інформацію можна буде прийняти рішення про доцільність реалізації цієї ідеї і перевести її в список проектів, або ж відкласти рішення на потім і продовжити збір даних, чи й взагалі відмовитись від неї.    
              </p> 
             <span ><img className='badge-task-img'  src= {idea} alt=""/></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Badges