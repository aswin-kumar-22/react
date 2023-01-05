import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Route,Router,Link, Routes } from 'react-router-dom'


const Mainrouter = () => {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link style={{textDecoration:"none",color:"whitesmoke"}} to="/">Home</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration:"none",color:"whitesmoke"}} to="about">About</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration:"none",color:"whitesmoke"}} to="contact">Contact</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration:"none",color:"whitesmoke"}} to="services">Services</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='services' element={<Services/>}></Route>
        </Routes>

    </div>
  )
}

export default Mainrouter