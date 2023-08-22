import React from 'react'
import {useAuthContext} from '../util/AuthContext'
import {useNavigate} from 'react-router-dom'
export default function ProtectedRoute({children}) {
 
    const {currentUser} = useAuthContext()
    const navigate = useNavigate()

    if (currentUser == null) {
      setTimeout(() =>{

          navigate('/')
      }, 1000)
    }

    return children
  
}
