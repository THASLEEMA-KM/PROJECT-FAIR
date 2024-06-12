import React, { useState } from 'react'
import loginimage from '../assets/login.png'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allAPI';
import Spinner from 'react-bootstrap/Spinner';

const Auth = ({insideRegister}) => {

  const [userData,setUserData] = useState({
    username:"",
    email:"",
    password:""
  })
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
// console.log(userData);
  const handleRegister = async(e)=>
    {
      e.preventDefault()
      if(userData.username && userData.email && userData.password)
        {
          try {
            const result = await registerAPI(userData)
            console.log(result);
            if(result.status==200)
              {
                toast.success(`Welcome ${result?.data?.username}.. Please Login`)
                setUserData({
                  username:"",
                  email:"",
                  password:""})
                  navigate('/login')
              }
              else{
                if(result.response.status==406)
                  {
                    toast.error(result.response.data)
                    setUserData({
                      username:"",
                      email:"",
                      password:""})
                  }
              }
          } catch (error) {
            console.log(error);
          }
        }
    }

  const handleLogin = async(e)=>
    {
      console.log("inside login");
      e.preventDefault()
      if(userData.email && userData.password)
        {
          try {
            const result = await loginAPI(userData)
            console.log(result);
            if(result.status==200)
              {
                setIsLoggedIn(true)
                sessionStorage.setItem("user",JSON.stringify(result.data.user))
                sessionStorage.setItem("token",result.data.token)
                setTimeout(() => {
                  // toast.warning(`Welcome ${result.data.user.username}...`)
                  setUserData({
                    username:"",
                    email:"",
                    password:""
              })
                setIsLoggedIn(false)
                  navigate('/')
                }, 2000);
              }
              else{
                if(result.response.status==404)
                  {
                    toast.error(result.response.data)
                  }
              }
          } catch (error) {
            console.log(error);
          }
    
        }
        else{
          toast.info("Please fill te form completely")
        }
    }


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
                              <Form.Control type="text" placeholder="Enter User Name" 
                              value={userData.username}
                              onChange={(e)=>setUserData({...userData,username:e.target.value})}
                              />
                          </FloatingLabel>
                  }
                  <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3">
                      <Form.Control type="email" placeholder="Enter Email id"
                      value={userData.email}
                      onChange={(e)=>setUserData({...userData,email:e.target.value})}
                      />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                      <Form.Control type="password" placeholder="Enter Password"
                      value={userData.password}
                      onChange={(e)=>setUserData({...userData,password:e.target.value})}
                       />
                  </FloatingLabel>
                  {
                    insideRegister ?
                    <div className="mt-3 text-center">
                      <button className='btn btn-warning' onClick={handleRegister}>REGISTER</button>
                      <p className='mt-2 text-black'>Already have an Account? Click here to <Link to={'/login'}>Login</Link></p>
                    </div>
                    :
                    <div className='mt-3 text-center'>
                      <button className='btn btn-success' onClick={handleLogin }>LOGIN
{ isLoggedIn && 
                     <Spinner animation="border" variant="light" />
}                      </button>
                      <p className='mt-2 text-black'>New User ? Click here to  <Link to={'/register'}>Register</Link></p>
                    </div>
                  }
                </Form>
              </div>
            </div>
          </div>
      </div>
      <ToastContainer theme='colored' autoClose={3000}/>

    </div>
    
  )
}

export default Auth
