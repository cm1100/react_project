import { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {


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
            email: "",
            password: "",
            confirmPassword: "",
        }
    )

    const validationRules=[

        {
            check:({password,confirmPassword})=>password!=confirmPassword,
            message:"pass and pass2 should be same"
        },
        {
            check:({username})=>username<3,
            message:"username should have more than 3 characters"
        },
        {
            check:({password})=>password.length<8,
            message:"pass should be greater then 7 characters"
        },
        {
            check:({email})=>email == '',
            message:"email is required"
        }
        

    ];

    const handleValidation = () => {
        for(const rules of validationRules){
            if(rules.check(values)){
                toast.error(rules.message,toastOptions);
                return false;
            }
        }


        return true;


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("in here")
        //if(handleVa)
        handleValidation();
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
                    <input type='text' placeholder='Email' name="email" onChange={(e) => handleChange(e)}></input>
                    <input type='password' placeholder='Password' name="password" onChange={(e) => handleChange(e)}></input>
                    <input type='text' placeholder='Confirm Password' name="confirmPassword" onChange={(e) => handleChange(e)}></input>

                    <button type='submit'>Create User</button>
                    <span>already have an account? <Link to='/login'>Login</Link></span>


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

//const Input = styled.input``;
export default Register
