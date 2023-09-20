import React from 'react'
import { FaVideo } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { useChatContext } from '../util/ChatContext';

export default function MainNav({handlebar}) {

  const {data} = useChatContext()


  console.log(data)

 

 
  return (
    <div className='main-nav flex items-center justify-between text-[white] p-3' >
        <h1 className='font-medium'>{data.user.displayName}</h1>
        <div className='flex  gap-2'>
      <FaVideo size={20} />
      <AiOutlineUser size={20} />
      <IoEllipsisHorizontalSharp size={20} onClick={handlebar} />
        
        </div>
    </div>
  )
}
