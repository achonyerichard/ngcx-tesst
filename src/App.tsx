import React from 'react'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import Users from './pages/users'
import Form from './pages/form'


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  )
}

export default App
