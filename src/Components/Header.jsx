import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar style={{zIndex:'10'}} className="position-fixed top-0 w-100 border rounded">
    <Container>
      <Navbar.Brand >
        <Link to={'/'} style={{textDecoration:'none'}}>
        <i class="fa-solid fa-folder-open"></i> PROJECT FAIR

        </Link>
       
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header
