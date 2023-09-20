import React, {useEffect, useRef} from 'react'
import { useAuthContext }  from '../util/AuthContext'
import { useChatContext }  from '../util/ChatContext'
import { Timestamp } from 'firebase/firestore'

export default function Message({message}) {
 const { currentUser} = useAuthContext()
 const {data} = useChatContext()
 const ref = useRef()

 useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth', block: 'end'})
 }, [message])

const date = message.date.toDate()

const hours = date.getHours();
const minutes = date.getMinutes();

const formattedHours = hours < 10 ? '0' + hours : hours;
const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return (
    <div ref= {ref} className={`message ${ message.senderId === currentUser.uid && 'owner'} flex gap-2 `}>
        <div className = 'message-info flex flex-col  '>
            <img src={message.senderId === currentUser.uid? 
                       currentUser.photoURL
                       :data.user.photoURL
          } className='w-[40px] h-[40px] rounded-[50%] object-contain'/>
            <span className='text-gray-500 text-sm'>{`${formattedHours}:${formattedMinutes} `}</span>
        </div> 
        <div className="message-content flex flex-col gap-3">
          {
              message?.text &&
            <p className='p-1  '>{message?.text} </p>
          }
            {
              message.img &&
            <img  src={message?.img}className='h-[150px] w-[150px] object-contain  mb-[15px]'/>
}
        </div>
    </div>
  )
}
 