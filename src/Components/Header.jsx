import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../Contexts/AuthContext'

const Header = ({insideDashboard}) => {
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

  const navigate = useNavigate()
  const handleLogout = ()=>{
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }
  return (
    <Navbar style={{zIndex:'10'}} className="position-fixed top-0 w-100 border rounded">
    <Container>
      <Navbar.Brand >
        <Link to={'/'} style={{textDecoration:'none'}}>
        <i class="fa-solid fa-folder-open"></i> PROJECT FAIR

        </Link>
       
      </Navbar.Brand>
      {
        insideDashboard &&
        <div className="ms-auto">
          <button onClick={handleLogout} style={{textDecoration:'none'}} className="btn btn-link">LOGOUT</button>
        </div>
      }
    </Container>
  </Navbar>
  )
}

export default Header
