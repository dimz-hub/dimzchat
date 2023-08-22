import React, {useState} from 'react'
import {  signOut } from "firebase/auth";
import {auth} from '../util/firebase'
import {useAuthContext} from '../util/AuthContext'

export default function () {

const {currentUser} = useAuthContext()
  return (
    <div className='navbar flex p-3 items-center justify-between text-[white]'>
        <div>
            <h1 className='text-base font-bold'>Dimz Chat</h1>
        </div>
        <div className='flex text-sm items-center gap-1'>
            <img src={currentUser?.photoURL} className='user-image bg-[white] w-[20px]  h-[20px] rounded-[50%]'/>
            <p>{currentUser?.displayName}</p>
            <button  onClick={() => signOut(auth)} className='p-2  nav-Button'>logout</button>
        </div>
    </div>
  )
}

