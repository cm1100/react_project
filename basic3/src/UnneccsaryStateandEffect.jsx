import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//common cases when we dont need effects
// transforming some kind of data for rendering purpose
// handling user events

function App() {

  const [fname,setFname] = useState('Cm')
  const [lname,setLname]= useState('Malik')


  //const [fullName,setFullName]=useState('');

  // dos emtire render with the stale value
  //useEffect(()=>setFullName(`${fname} ${lname}`),[fname,lname])
  const fullName = fname+" "+lname;
  console.log(fullName)
  

  return (
    <>
      App
    </>
  )
}

export default App
