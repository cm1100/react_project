import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, NavLink, Outlet, Route, Routes, useNavigate, useParams, useSearchParams } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <h1>Home</h1>
    </>
    
   
  )
}


const About = () => {
  return (
    <h1>About</h1>
  )
}

const NoMatch = () => {
  return (
    <h1>Nothing to show</h1>
  )
}

const Layout = () => {

  const style = ({ isActive }) => (
    {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? 'black' : 'normal'
    }

  )

  return (
    <div>
      <h1>React Router</h1>
      <nav style={{ borderBottom: 'solid 1px', padding: '1rem' }}>
        <NavLink to='/home' style={style}>Home</NavLink>
        &nbsp;&nbsp;
        <NavLink to='/about' style={style}>About</NavLink>
        &nbsp;&nbsp;
        <NavLink to='/users' style={style}>Users</NavLink>
        <Outlet />
      </nav>

    </div>
  )
}

const Users = ({ users }) => {

  const [searchParams,setSearchParams] = useSearchParams();

  const handleSearch=(evt)=>{
    const name = evt.name.target;
    if(name){
      setSearchParams({name})
    }else{
      setSearchParams({})
    }
  }

  return (
    <>
      <h1>Users</h1>
      <input type='text' onChange={handleSearch}></input>
      <ul>
        {users.map((user) => (<li key={user.id}>
          <Link to={user.id}>{user.fullName}</Link>
        </li>))}
      </ul>
      <Outlet />
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const [users, setUsers] = useState([
    { id: '1', fullName: 'cm1' },
    { id: '2', fullName: 'cm3' },
    { id: '3', fullName: 'cm7' }
  ])


  const navigate = useNavigate();

  const onRemoveUser = (userId) => {
    setUsers(users.filter((user) => user.id != userId))
    navigate('/users');
  }

  return (
    <div>
      started


      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/users' element={<Users users={users} />}>
            <Route path=':userId' element={<User onRemoveUser={onRemoveUser} />}>
            </Route>

          </Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<NoMatch />}></Route>
        </Route>
      </Routes>
    </div>
  )
}





const User = ({ onRemoveUser }) => {
  const { userId } = useParams();
  return (
    <>
      <h2>User: {userId}</h2>

      <button type='button' onClick={() => onRemoveUser(userId)}>Remove</button>

      <Link to='/users'>Back to users</Link>
    </>
  )
}

export default App
