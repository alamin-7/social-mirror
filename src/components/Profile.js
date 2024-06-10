import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Login from './Login'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getProfile } from '../services/authService';

const Profile = ({email}) => {

  const [profileData, setProfileData] = useState(null);

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
    <p>Signed as: {profileData.user.email}</p>
  )
}

export default Profile;