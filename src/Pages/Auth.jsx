import React from 'react'
import loginimage from '../assets/login.png'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Auth = ({insideRegister}) => {
  return (
    <div style={{width:'100%',height:'100vh'}} className="d-flex justify-content-center align-items-center">
      <div className='container w-75'>
          <div className="card shadow p-2">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img className='w-100' src={loginimage} alt="login" />
              </div>
              <div className="col-lg-6">
                <h1 style={{letterSpacing:'5px'}} className="fw-bolder mt-2 text-black">
                <i className="fa-solid fa-folder-open me-2"></i>PROJECT FAIR
                </h1>
                <h5 className='fw-bold mt-3 text-black'>
                  Sign {insideRegister?'Up':'In'} to your Account
                </h5>
                <Form className='mt-3'>
                  { 
                    insideRegister &&
                        <FloatingLabel
                                controlId="floatingInput"
                                label="User Name"
                                className="mb-3">
                              <Form.Control type="text" placeholder="Enter User Name" />
                          </FloatingLabel>
                  }
                  <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3">
                      <Form.Control type="email" placeholder="Enter Email id" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                      <Form.Control type="password" placeholder="Enter Password" />
                  </FloatingLabel>
                  {
                    insideRegister ?
                    <div className="mt-3 text-center">
                      <button className='btn btn-warning'>REGISTER</button>
                      <p className='mt-2 text-black'>Already have an Account? Click here to <Link to={'/login'}>Login</Link></p>
                    </div>
                    :
                    <div className='mt-3 text-center'>
                      <button className='btn btn-success'>LOGIN</button>
                      <p className='mt-2 text-black'>New User ? Click here to  <Link to={'/register'}>Register</Link></p>
                    </div>
                  }
                </Form>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Auth
