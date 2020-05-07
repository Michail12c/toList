import React from 'react'
import { useState } from 'react'

const MainPage = () => {
  const [statusContent, setStatusContent] = useState(false)
  
   
  return(
   <div className ="main-page">
     { !statusContent ? <MainContent setStatusContent = {setStatusContent}/> 
                       : <DemonstrationContent setStatusContent = {setStatusContent}/> }
   </div>
  )
}

const MainContent = ({setStatusContent}) => {
   return(
    <div className="title-main">
    <h1>
      MainPage
    </h1>
    <h5>test text</h5>
     <p> <img src="https://www.aisheonline.com/wp-content/uploads/2017/06/a-te-li-slova-ya-uchu.jpg" alt="image"/>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quis labore quae adipisci odit rerum esse sunt. Temporibus hic deserunt placeat itaque accusantium aspernatur voluptatibus quidem, obcaecati vero, commodi aperiam?Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
     </p>
     <p>
     Omnis ipsa assumenda ad quae incidunt minus ab consectetur molestiae eos magnam, tempora velit necessitatibus vero repellendus. Repellendus tempora eaque iusto dignissimos.
     </p>
     <h5>name new case</h5>
     <p>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quam veritatis harum? Animi molestias odio minus mollitia ipsum culpa dolores. Autem mollitia quas fugit praesentium perspiciatis consectetur, beatae odio quia?Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
     </p>
        <p>
        Consectetur nulla doloribus exercitationem? Quaerat cupiditate provident quam quas laudantium ex blanditiis voluptates eum. Error laborum provident qui eveniet quidem magnam officia.
        </p>
     <div className = 'demonstration'> 
       <div className=' child-text'>
         <h5>demonstartion</h5>
          <p>Вам потрібно зареєструватись для користування додатком, але ви можете ознайомитися з його можливостями у нашій презентації</p>
       </div>
       <div className='child-demo'>
         <button onClick= {() => setStatusContent(true)}  className='btn'>Почати</button>
       </div>
     </div>
   </div>
  )
}

const DemonstrationContent = ({setStatusContent}) => {
  return(
    <div>
      <h1>Demonstration</h1>
      <button onClick = {() => setStatusContent(false)} className='btn'>Повернутись</button>
    </div>
  )
}

export default MainPage