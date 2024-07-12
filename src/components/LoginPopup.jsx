import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { FaX } from 'react-icons/fa6'

const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Login")

  return (
    <div className='absolute z-10 w-full h-full bg-neutral-900/50 dark:bg-neutral-600/50 grid'>
      <form style={{ width: 'max(23vw, 330px)'}} className='place-self-center bg-white dark:bg-neutral-900 flex flex-col gap-6 py-6 px-8 rounded-lg animate-fade'>
        <div className='flex justify-between dark:text-neutral-200 items-center font-bold'>
          <h2 className='text-2xl'>{ currState}</h2>
          <FaX className='cursor-pointer hover:text-neutral-800 hover:dark:text-neutral-300 text-xl' onClick={() => setShowLogin(false)} />
        </div>
        <div className='flex flex-col gap-5'>
          {currState==="Login" ? <></> : <input className='outline-none dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="text" placeholder='Your name' required/>}
          <input className='outline-none dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="email" placeholder='Your email' required/>
          <input className='outline-none dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700' type="password" placeholder='Password' required/>
        </div>
        <button className='py-3 rounded-lg font-bold bg-orange-500 hover:bg-orange-600 text-neutral-200'>{currState==="Sign Up" ? "Create Account" : "Login"}</button>
        <div className='text-neutral-700 dark:text-neutral-300 flex items-start gap-2 -mt-4'>
          <input className='mt-1' type="checkbox" required/>
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login" 
          ? <p className='dark:text-neutral-200'>Create a new account? <span className='text-orange-500 hover:text-orange-600 cursor-pointer font-bold' onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p className='dark:text-neutral-200'>Already have an account <span className='text-orange-500 hover:text-orange-600 cursor-pointer font-bold' onClick={() => setCurrState("Login")}>Login here</span></p>
        } 
      </form>
    </div>
  )
}

export default LoginPopup
