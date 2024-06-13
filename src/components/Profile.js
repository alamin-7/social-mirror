import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Login from './Login'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getProfile } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

const Profile = ({email}) => {

  const [profileData, setProfileData] = useState(null);

  const navigate = useNavigate();

  const handeLogout = () => {
    console.log("in handle logout");
    localStorage.removeItem('token');
    navigate('/login');
  }

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        if(data){
          console.log('in profile, data:', data);
        }
        else{
          console.log('no data');
        }
        setProfileData(data);
      } catch (error) {
        console.error('Failed to fetch profile', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profileData) return <p>Loading...</p>;

  return (
    <div>
    <p>Signed as: {profileData.user.email}</p>
    <button onClick={handeLogout}>Logout</button>
    </div>
    
  )
}

export default Profile;