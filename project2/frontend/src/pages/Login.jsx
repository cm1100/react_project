import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { loginRoute } from '../utils/APIRoutes';


function Login() {


  const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark"

  }


  const [values, setValus] = useState(
      {
          username: "",
          password: "",
      }
  )


  const navigate = useNavigate();

  const validationRules=[

      
      {
          check:({username})=>username==="",
          message:"username is required"
      },
      {
          check:({password})=>password==="",
          message:"paass is required"
      }
      

  ];

  useEffect(()=>{
    if(localStorage.getItem('chat-app-user')){
      navigate('/')
    }
  })

  const handleValidation = () => {
      for(const rules of validationRules){
          if(rules.check(values)){
              toast.error(rules.message,toastOptions);
              return false;
          }
      }


      return true;


  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      if(handleValidation()){
          const {username,password}=values;
          const {data} = await axios.post(loginRoute,{
              username,password
          });
          if(data.status==false){
              toast.error(data.msg,toastOptions);
          }
          else if(data.status=true){
              localStorage.setItem("chat-app-user",JSON.stringify(data.user));
              navigate('/');
          }

      }
  }

  const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setValus({ ...values, [name]: value });
      console.log(values);

  }


  return (
      <>
          <FormContainer>
              <form onSubmit={(evt) => handleSubmit(evt)}>
                  <div className='brand'>
                      <img src='' alt=''>
                      </img>
                      <h1>
                          Chat App
                      </h1>
                  </div>

                  <input type='text' placeholder='Username' name="username" onChange={(e) => handleChange(e)}></input>
                  <input type='password' placeholder='Password' name="password" onChange={(e) => handleChange(e)}></input>
                  <button type='submit'>Login</button>
                  <span>Dont have an account? <Link to='/register'>Register</Link></span>


              </form>

          </FormContainer>
          <ToastContainer />
      </>
  )
}

const FormContainer = styled.div`
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
gap:1rem;
align-items:center;
background-color:#131324;
.brand{
  display:flex;
  align-items:center;
  gap:1rem;
  justify-content:center;
  img{
      height:5rem;
  }
  h1{
      color:white;
      text-transform:uppercase;

  }
}
form{
  display:flex;
  flex-direction:column;
  gap:2rem;
  background-color:#00000076;
  border-radius:2rem;
  padding: 3rem 5rem;

}

input{
  background-color:transparent;
  padding:1rem;
  border:0.1rem solid #4e0eff;
  border-radius:0.4rem;
  color:white;
  font-size:1rem;
  width:100%;
  height:100%;
  &:focus{
      border:0.1rem solid #997af0;
      outline:none;
  }
}    
button{
  background-color:#4e0eff;
  color:white;
  padding:1rem 2rem;
  border:none;
  font-weight:bold;
  cursor:pointer;
  border-radius:0.4rem;
  text-transform:uppercase;
  &:hover{
      border:0.1rem solid #997af0;
      outline:none;
  }
}

span{
color:white;
text-transform:uppercase;
a{
  color:#4e0eff;
  text-decoration:none;
  font-weight:bold;
  }
}
`;

export default Login
