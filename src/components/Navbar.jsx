import React, {useState} from 'react'
import {  signOut } from "firebase/auth";
import {auth} from '../util/firebase'
import {useAuthContext} from '../util/AuthContext'
import { useNavigate } from 'react-router-dom';

export default function () {

  const navigate = useNavigate()

const {currentUser} = useAuthContext()

function handleSignOut() {
  signOut(auth)
  navigate('/signin')
}

  return (
    <div>

    <div className='navbar flex p-3 items-center justify-between text-[white]'>
        <div>
            <h1 className='xs:hidden font-bold'>Dimz Chat</h1>
        </div>
        <div className=' flex text-sm items-center gap-1 xs:gap-[2px] xs:mr-[10px]'>
            <img src={currentUser?.photoURL} className='user-image bg-[white] w-[20px]  h-[20px] rounded-[50%] xs:mr-[14px]  xs:w-[40px] xs:h-[40px]'/>
            <p className=' text-[19px] '>{currentUser?.displayName}</p>
            <button  onClick={handleSignOut} className='p-2  nav-Button'>logout</button>
        </div>
    </div>
            <h1 className='hidden xs:block font-bold relative top-[35rem] left-[41px]'>Dimz Chat</h1>
    </div>
  )
}

