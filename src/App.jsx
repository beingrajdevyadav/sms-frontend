import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Delete from './pages/Delete'
import About from './pages/About'
import './App.css';
import './css/form.css'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className="current-page">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/delete' element={<Delete />} />
          <Route path='*' element={<About />} />
        </Routes>
      </div>

    </div>
  )
}

export default App