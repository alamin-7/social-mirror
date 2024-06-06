import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'

const Profile = ({email}) => {

  return (
    <div>
        <h3>Your profile</h3>
        <p>Email: {email}</p>
    </div>
  )
}

export default Profile;