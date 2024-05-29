import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Auth from './Pages/Auth'
import Landing from './Pages/Landing'
import Footer from './Components/Footer'
import Projects from './Pages/Projects'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/login' element={<Auth/>}></Route>
        <Route path='/register' element={<Auth insideRegister={true}/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
