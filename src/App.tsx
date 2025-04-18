import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Tache from './components/modules/taches/Tache'
import { Login } from './components/auths/Login'
import { Register } from './components/auths/Register'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login/>} />
        <Route path='/register' element={ <Register/>} />
        <Route path='/tache' element={ <Tache/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
