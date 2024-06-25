import { Route, Routes, Navigate } from 'react-router-dom'

import './App.css'
import Dashboard from './Pages/Dashboard'
import Auth from './Pages/Auth'
import Landing from './Pages/Landing'
import Footer from './Components/Footer'
import Projects from './Pages/Projects'
import { useContext } from 'react'
import { tokenAuthContext } from './Contexts/AuthContext'


function App() {
  
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/login' element={<Auth/>}></Route>
        <Route path='/register' element={<Auth insideRegister={true}/>}></Route>
        <Route path='/projects' element={isAuthorised? <Projects/> : <Navigate to={'/login'}/>}></Route>
        <Route path='/dashboard' element={isAuthorised? <Dashboard/> : <Navigate to={'/login'}/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
