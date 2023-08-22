import React from 'react'
import Navbar from './Navbar'
import Usersearch from './Usersearch'
import Users from './Users'

export default function Sidebar({showbar, setshowBar}) {

  

  return (
    <div className={` sidebar  ${showbar ? 'show-bar' : 'hide-bar'}`}>
        <Navbar />
        <Usersearch />
        <Users showbar = {showbar} setshowBar = {setshowBar}/>
        

    </div>
  )
}
