import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function SearchBox({search,setSearchText}){
  return (
    <>
    <input type='text' value={search} onChange={(e)=>setSearchText(e.target.value)}></input>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const [search,setSearchText]= useState('')

  return (
    <>
     <div>
      App
      <SearchBox search={search} setSearchText={setSearchText}/>
     </div>
    </>
  )
}

export default App
