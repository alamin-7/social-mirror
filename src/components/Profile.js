import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Profile = ({email}) => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {email && (
            <Navbar.Text className="ml-auto">
              Signed in as: <p>{email}</p>
            </Navbar.Text>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Profile;