import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//common cases when we dont need effects
// transforming some kind of data for rendering purpose
// handling user events
function SetComment({user_id}){

  const [comment,setComment] = useState('')

  return (
    <div>
      {user_id}

<textarea value={comment} onChange={(e)=>{setComment(e.target.value)}} onSubmit={()=>{setComment("")}}></textarea>
    </div>
  
)

}

function App() {

  const [user,setUser] = useState(1)

  return (
    <>
      App333
      <button onClick={()=>user==1?setUser(2):setUser(1)}>click</button>
      <SetComment key={user} user_id={user}/>
    </>
  )
}

export default App
