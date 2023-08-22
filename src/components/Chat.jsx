import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Mainchat from './Mainchat'
export default function Chat() {

const [showBar, setshowBar] = useState(false)


console.log(showBar)
function  handleBar () {
  setshowBar(!showBar)
}
  return (
    <div className='  flex justify-center items-center h-[100vh] '>
      <div className='chat h-[70vh] w-[50%] rounded-[20px] bg-[white]'>
        <div>

      <Sidebar showbar = {showBar} setshowBar = {setshowBar}/>
        </div>
      <div className='main-chat'>
      <Mainchat handlebar = {handleBar}/>
      </div>
      </div>


    </div>
  )
}
