import React from 'react'
import './App.css';
import SignUp from '../src/components/SignUp'
import Signin from './components/Signin';
import {Routes, Route} from 'react-router-dom'
import Chat from './components/Chat';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className='content' >
      
 <Routes>
  <Route path='/' element = {<LandingPage />} />
  <Route path='/signin' element = {<Signin/>} />
  <Route path='/signup' element = {<SignUp />} />
  <Route path='/chat' element = {
    <ProtectedRoute>
    <Chat />
    </ProtectedRoute>
  } />
 </Routes>


   
    </div>
  );
}

export default App;
