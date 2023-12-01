"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import Logo from '@/components/Logo';

export default function StudentSignUp() {
  const router = useRouter();
  const handleSignUp = (e: any) => {
    e.preventDefault();
    // alert('Sign Up')

    router.replace('/student/login');
  }
  return (
    <div className='flex min-h-screen'>

      {/* LEFT SECTION */}
      <div className='flex-1 flex justify-center items-center'>
        <div className='w-4/5 lg:pl-36'>
          <h2 className="text-[2.3125rem] font-semibold tracking-tighter">Sign Up</h2>
          <p className='mt-3.5 mb-10 font-semibold text-[1.3125rem] tracking-tight'>Welcome to TechSpace Academy!</p>


          <form>
            <div className='flex flex-col w-full'>
              <label htmlFor="tsaId" className='mb-1 font-semibold tracking-tight'>TSA ID</label>
              <input type="text" className='border border-[#b8b7b7] outline-none py-3 pl-5 rounded'/>
            </div>

            <div className='flex flex-col w-full my-9'>
              <label htmlFor="password" className='mb-1 font-semibold tracking-tight'>Create Password</label>
              <input type="password" className='border border-[#b8b7b7] outline-none py-3 pl-5 rounded'/>
            </div>

            <div className='flex flex-col w-full'>
              <label htmlFor="confirmPassword" className='mb-1 font-semibold tracking-tight'>Confirm Password</label>
              <input type="password" className='border border-[#b8b7b7] outline-none py-3 pl-5 rounded'/>
            </div>

            <button 
              onClick={handleSignUp}
              className='mt-14 rounded bg-[#114CFE] w-full text-white py-3 font-bold tracking-tight'
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className='flex-1 bg-[#E3EAFF] flex justify-center items-center max-lg:hidden'>
        <Logo />
      </div>
    </div>
  )
}
