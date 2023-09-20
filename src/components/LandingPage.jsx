import React from 'react'

import {useNavigate} from 'react-router-dom'

export default function LandingPage() {

  const navigate = useNavigate()

  function onclick() {
     navigate('/signin')
  }
  return (
    <div  className='w-[100vw] h-[100vh] landing-page'>

    <div className=' w-[100vw] h-[100vh]  flex flex-col items-center justify-center xs:pt-[-50px] '>

      <h1 className='text-[50px] mt-[-80px] xs:mt-[0px] xs:flex  xs:text-[35px] xs:pb-[25px] ' >DIMZ CHAT </h1>
      <div className='flex items-center xs:'>
        <img  src='man-texting.png' alt='person-chatting' className='man xs:w-[170px]'/>
        <img  src='world.png' alt='world' className='world xs:w-[170px]'/>
      </div>
      <p className='mt-[30px]  text-[20px] xs:w-[70%] xs:text-center '>
        Bringing the world together one click at a time
      </p>
      <button className='bg-[black] p-3 rounded-[10px] font-[500] mt-[30px] ' onClick={onclick} >Get Started</button>
    </div>
    </div>
  )
}
