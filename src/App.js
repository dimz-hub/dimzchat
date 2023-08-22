import React from 'react'
import './App.css';
import SignUp from '../src/components/SignUp'
import Signin from './components/Signin';
import {Routes, Route} from 'react-router-dom'
import Chat from './components/Chat';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className='content' >
      
 <Routes>
  <Route path='/' element = {<Signin />} />
  <Route path='/Signup' element = {<SignUp />} />
  <Route path='/Chat' element = {
    <ProtectedRoute>
    <Chat />
    </ProtectedRoute>
  } />
 </Routes>


   
    </div>
  );
}

export default App;
