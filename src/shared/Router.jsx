import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';

import Board from '../pages/Board';
import SingleBoard from '../pages/SingleBoard';




const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LogIn />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/board' element={<Board/>}/>
            <Route path='/board:id' element={<SingleBoard/>}/>



        </Routes>
    </BrowserRouter>
  )
}

export default Router
