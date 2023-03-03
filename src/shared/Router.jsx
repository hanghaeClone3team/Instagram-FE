import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import MainPage from '../pages/MainPage';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LogIn />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/main' element={<MainPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
