import React, {useState} from 'react'
import {useAuthContext} from '../util/AuthContext'
import { collection, query, where, getDocs, doc, getDoc, setDoc, updateDoc, serverTimestamp} from "firebase/firestore";
import {db} from '../util/firebase'



export default function Usersearch() {
  const [username, setUsername] = useState('')
const [user, setUser] = useState(null)
const [error, setError] = useState(false)
const {currentUser} = useAuthContext()

async function handleSearch() {
   const q = query(collection(db, 'users'), where('displayName', '==', username))
    const querySelector = await getDocs(q)
    try{
if(querySelector.empty) {
  setError(true)
  setUser(null)
}else {

  querySelector.forEach((doc) => {
    setUser(doc.data())
    setError(false)
  })
}
      } catch(error) {
        console.log(error)
      }
 
   
 
}


function handlekey(e) {
  console.log('Key code:', e.code );
 if (  e.code === 'Enter' || e.keyCode === 13 )  {
    handleSearch()
 }
}

async function handleSelected() {
  const combinedId = currentUser.uid > user.uid
   ? currentUser.uid + user.uid 
   : user.uid + currentUser.uid;

try{
  const res = await getDoc(doc(db, 'chats',combinedId))

if(!res.exists()) {
  await setDoc(doc(collection(db,'chats'), combinedId), { messages: []})

  await updateDoc(doc(db,'userchats', currentUser.uid), {
   [combinedId+'.userInfo']: {
    uid:user.uid,
    displayName: user.displayName,
    photoURL:user.photoURL
   },
   [combinedId + '.date']: serverTimestamp()
  })
  await updateDoc (doc(db,'userchats', user.uid), {
   [combinedId+'.userInfo']: {
    uid:currentUser.uid,
    displayName: currentUser.displayName,
    photoURL:currentUser.photoURL
   },
   [combinedId + '.date']: serverTimestamp()
  })
}
  

} catch (err) {
  console.log(err.message)
}
  setUser(null)
  setUsername('')
}


  return (
    <div className='text-[white] color-[black]'> 
        <span className='flex items-center justify-between'>

         <input  type='text' placeholder='Find a user' className='outline-none w-[100%] p-2 bg-[transparent]' onKeyDown={(e) => handlekey(e)} value={username} onChange={(e) => setUsername(e.target.value)} />
       { username && <button onClick = {handleSearch}  className='p-1 bg-[black] opacity-50 font-[600] rounded-[10px] text-[15px] mr-[6px]'>search</button> }
        </span>
         {
          error && <p className='p-2 text-[gray] font-medium'>no user found</p>
         }
        { user &&
         <div onClick = {handleSelected} className=' user-search flex items-center pl-2 gap-2 '>
            <img src={user?.photoURL} className='user-img w-[40px] h-[40px] rounded-[50%] object-cover' /> 
            <p className='font-semibold'>{user?.displayName}</p>
         </div> }
    </div>
  )
}