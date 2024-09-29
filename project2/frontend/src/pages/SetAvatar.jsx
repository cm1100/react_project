import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { registerRoute } from '../utils/APIRoutes';


function SetAvatar() {
  const api = 'https://api.multiavatar.com/456/8945'
  const navigate = useNavigate();


  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelectedAvatar] = useState(undefined);

  const setProfilePicture = async () => { };

  const fetchAvatars = async () => {
    const data = [];
    for (let i = 0; i < 4; i++) {
      const image = await axios.get(
        `${api}/${Math.round(Math.random() * 1000)}`
      );
      //const buffer = new Buffer(image.data);
      data.push(image.data);

    }
    setAvatars(data);
    setIsLoading(false);
  }

  useEffect(()=>{
    fetchAvatars();

  }, [])

  return (
    <>
      <Container>
        <div className='title-container'>
          <h1>Pick an avatar as your profile</h1>
        </div>
        <div className='avatars'>
          {avatars?.map((avatar, index) => {
            return (
              <div className={`avatar ${selected === index ? 'selected' : ""}`}>
                <img src={`data:image/svg+xml;base64,${btoa(avatar)}`} alt='avatar'></img>
              </div>
            )
          })}
        </div>
      </Container>
      <ToastContainer />
    </>
  )
}

const Container = styled.div``;
export default SetAvatar
