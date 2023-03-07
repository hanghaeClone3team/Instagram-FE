import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';

import Board from '../pages/Board';
import SingleBoard from '../pages/SingleBoard';
import EditPostModal from '../components/EditPostModal';
import MyPage from '../pages/MyPage';




const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LogIn />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/board' element={<Board/>}/>
            <Route path='/board/:id' element={<SingleBoard/>}/>
            <Route path = '/editpost/:id' element={<EditPostModal />}/>
            <Route path = '/my_page' element={<MyPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
