import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProvider,{useUserData} from './contexts/UserProvider'


//context api , custom hooks,composition pattern ,hoc.state management libraries (redux)
function MyComp(){

  const name = useUserData();
  
  console.log(name)
  return (
    <div>
      working
      {name}
    </div>
  )
}


function App() {
  
  
  return (
    <>
    <UserProvider>
    APP hii
    <MyComp/>
    
    </UserProvider>
    
   
      
    </>
  )
}



export default App
