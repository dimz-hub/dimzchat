import React from 'react'
import MainNav from './MainNav'
import Messages from './Messages'
import Chatinput from './Chatinput'
export default function Mainchat({handlebar}) {


  
  return (
    <div className='chat-page h-[100vh]'>
  <MainNav handlebar = {handlebar} />
  <Messages />
  <Chatinput />
    </div>
  )
}
