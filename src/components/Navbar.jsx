import React, {useState} from 'react'
import {  signOut } from "firebase/auth";
import {auth} from '../util/firebase'
import {useAuthContext} from '../util/AuthContext'

export default function () {

const {currentUser} = useAuthContext()
  return (
    <div>

    <div className='navbar flex p-3 items-center justify-between text-[white]'>
        <div>
            <h1 className='xs:hidden font-bold'>Dimz Chat</h1>
        </div>
        <div className='users flex text-sm items-center gap-1 xs:justify-between '>
            <img src={currentUser?.photoURL} className='user-image bg-[white] w-[20px] xs:mr-[50px] h-[20px] rounded-[50%] xs:w-[40px]  xs:w-[40px] xs:h-[40px]'/>
            <p className='xs:mr-[45px] text-[19px] '>{currentUser?.displayName}</p>
            <button  onClick={() => signOut(auth)} className='p-2  nav-Button'>logout</button>
        </div>
    </div>
            <h1 className='hidden xs:block font-bold relative top-[83vh] left-[41px]'>Dimz Chat</h1>
    </div>
  )
}

