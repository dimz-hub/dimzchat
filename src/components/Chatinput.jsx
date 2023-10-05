import React, {useState, useEffect} from 'react'
import { FaPaperclip } from 'react-icons/fa';
import {useChatContext} from '../util/ChatContext'
import {useAuthContext} from '../util/AuthContext'
import { doc, updateDoc, arrayUnion, Timestamp, serverTimestamp} from "firebase/firestore";
import {db} from '../util/firebase'
import {v4 as uuid} from 'uuid'
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import {storage}  from '../util/firebase'

export default function Chatinput() {

  const [img, setImg] = useState(null)
  const [text, setText] = useState('')
  const [sending, setSending] = useState(false)
  const {data} = useChatContext()
  const {currentUser} = useAuthContext()
  const id = uuid()
  


  
  const  handleSend = async ()  => {

    if (sending) return;

    try{

      setSending(true);

    if(img) {
       
         const storageRef =   ref(storage, id)
         const uploadTask =   uploadBytesResumable(storageRef, img);
      
      uploadTask.on(
           (error) => {
             alert('error occurred')
            }, 
           async  () => {
              try{

                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
                
                  
                
                await updateDoc(doc(db, 'chats', data.chatId), {
          messages : arrayUnion({
            id: uuid(),
            senderId: currentUser.uid,
            text,
            date: Timestamp.now(),
            img:downloadURL
          })
        })
        setText('');
        setImg(null);
        setSending(false)    
      }catch(err){
        setSending(false)
        
      }
        
      

  
        
      
      }
      );
         
       }else{
          await updateDoc(doc(db, 'chats', data.chatId), {
            messages: arrayUnion({
              id: uuid(),
              senderId: currentUser.uid,
              text,
              date: Timestamp.now(),
              
  
            })
          })
  
          setText('');
          setSending(false)
       }
       await updateDoc(doc(db, 'userchats', currentUser.uid), {
        [data.chatId + '.lastMessage']: {
          text
        },
        [data.chatId + '.date'] :  serverTimestamp()
       })
       await updateDoc(doc(db, 'userchats', data.user.uid), {
        [data.chatId + '.lastMessage']: {
          text
        },
        [data.chatId + '.date'] :  serverTimestamp()
  
       })
      
    }catch(err) {
      setSending(false)
    }
    
  }
  
  








  return (
    <div className='p-2 chat-input bg-[white] flex items-center  justify-between'>
      <input className='w-[80%] outline-none' type='text' placeholder='Type something...' value={text}  onChange={(e) => setText(e.target.value)}/>
      <div className='flex items-center gap-1'>
        <input type='file' id = 'file' className='hidden' onChange={(e) => setImg(e.target.files[0])}/>
      <FaPaperclip className='text-gray-500 w-[25px] h-[25px] mr-[-5px] mt-[3px]'   />
      <label htmlFor='file'>
      <img  src='./gallery.png' className='w-[35px] h-[25px]' alt='gallery' />
      </label> 
      <button onClick={() => handleSend()} className='p-1'>  {sending ? 'Sending...' : 'Send'}</button>
      </div>
     </div>
  )
}
