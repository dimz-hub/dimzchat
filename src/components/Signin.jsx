import React, {useState} from 'react';
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../util/firebase'
import {useNavigate, Link} from 'react-router-dom'


export default function Signin() {

  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  
  async function handleSubmit(e) {
    e.preventDefault()

    try{
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/chat')


    }
    catch (err){
        setError(true)
    }  
  }

  return (
    <div className=' h-[100vh] flex items-center justify-center'>

<div className='signup flex flex-col items-center rounded-[20px] h-[70vh] w-[50%] gap-[20px] xs:w-[100%] xs:h-[100%] xs:rounded-none  xs:pt-[75px]'>
      
      <h1 className='mt-[20px] font-bold text-2xl'>
       DIMZ CHAT 
      </h1>

      <h2 className='font-[500] text-xl xs:mb-[50px]'>Login</h2>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-[30px] '>
       <span  className = ' xs:mb-[20px]'>
       <input type='email' id='email' className='rounded-[20px] text-[black]' placeholder='email' onChange={(e) => setEmail(e.target.value)}   />
       </span>
     <span className = ' xs:mb-[20px]'>
       <input type='password'id='password' className='rounded-[20px] text-[black]' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
     </span>

      <button className='w-[300px] bg-[black] pt-[10px] pb-[10px] mt-[-10px] rounded-[20px] xs:mb-[60px]'>Sign In</button>

<p>You don't have an account &#x1F632; , change that <Link to='/signup' className='underline font-bold'>Now</Link> </p>
{error && <span>Invalid login details</span> }

      </form>
      </div>
    </div>
  )
}
