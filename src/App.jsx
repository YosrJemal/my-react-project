import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const courseTitle = "Advanced Web Development"

function App (){
  const studentName ='Jmal Yosr'
  const student = {
    name: 'Jmal',
    age: 20,
    track: 'Business',
  }
  function sayHello(){
    return 'Hello ${studentName}'
  }
  return (
    <div>
      <h1> Hello everyone</h1>
      <p> my name is {studentName}</p>
      <p> Course: {courseTitle}</p>
      <p> Age: {student.age}</p>
      <p> Track: {student.track}</p>
    </div>
  )
}


export default App;

  

  
