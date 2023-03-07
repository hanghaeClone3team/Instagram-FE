import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';

import Board from '../pages/Board';
import SingleBoard from '../pages/SingleBoard';
import EditPostModal from '../components/EditPostModal';
import PostModal from '../components/PostModal';




const Router = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    
        <Routes location={!background || location}>
            <Route path='/' element={<LogIn />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/board' element={<Board/>}>
              {background &&  <Route path='boardmodal' element={<PostModal />}/>}
            </Route>
            <Route path='/board/:id' element={<SingleBoard/>}/>
            <Route path = '/editpost/:id' element={<EditPostModal />}/>
        </Routes>
   
  )
}

export default Router
