import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import Board from '../pages/Board';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LogIn />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/board' element={<Board />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
