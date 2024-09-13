import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function ChatRoom({roomId}){
  const [serverUrl,setServerUrl] = useState('localhost:8000')

  return (
    <div>
      <label>
        Server Url:{" "}
        <input value={serverUrl}>
        </input>
        <h1>welcomw to room</h1>
      </label>

    </div>
  )
}



function App() {
  const [roomId,setRoomId] = useState('js');
  const [show,setShow]=useState(false);
  return (
    <div>
      <label>
      choose the chat room:
      <select value={roomId} onChange={(e)=>setRoomId(e.target.value)}>
        <option value="js">js</option>
        <option value="react">react</option>
        <option value="css">css</option>
      </select>


      </label>
      <button onClick={()=>setShow(!show)}>
        {show?'CloseChat':'Open chat'}

      </button>
      {show && <hr></hr>}
      {show && <ChatRoom roomId={roomId}/>}
    </div>
    
  )
}

export default App
