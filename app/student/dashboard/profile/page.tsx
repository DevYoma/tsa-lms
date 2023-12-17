"use client"

import Image from 'next/image'
import React from 'react';
import ProfileUserImg from '@/public/images/profileImg.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProfilePage = () => {

  return (
    <div className=''>
        <h2 className='mb-[1.13rem] text-[#000D33] text-3xl font-semibold tracking-tight'>Profile Settings</h2>

        <div className="h-[9.375rem] rounded-lg bg-[#F1F4FE] mb-48">
            <div className="border border-transparent relative">
                <div className="flex items-end gap-[1.94rem] mt-[6.06rem]">
                    <Image 
                        alt='user'
                        src={ProfileUserImg}
                    />
                    
                    <div className="pb-[0.94rem]">
                        <p className="mb-[0.88rem] text-2xl font-semibold tracking-tight">Temitope Cooker</p>
                        <p className="font-medium text-[1.3125rem] tracking-tight">TCooker@gmail.com</p>
                    </div>
                </div>

                <p className="absolute right-0 top-[40%] pr-6 underline font-normal text-[#114CFE] cursor-pointer">Change background picture</p>
            </div>
        </div>

        <div className="">
            <div className="flex items-center justify-between pt-2">
                <h2 className="font-semibold text-2xl tracking-tight text-[#000D33]">Email Settings</h2>
                <ExpandMoreIcon fontSize="large" className='cursor-pointer'/>
            </div>
            
            <hr className='mt-6'/>

            <form className='mt-[1.44rem]'>
                <div>
                    <label htmlFor="email" className='font-semibold text-[1.3125rem] text-[#303030] tracking-tight'>Current Email</label> <br />
                    <input 
                        type="email"  
                        className='py-[0.88rem] pl-[1.12rem] w-2/4 border border-'
                        placeholder='Janedoe@gmail.com'
                    />
                </div>

                <div className='mb-[1.94rem] mt-6'>
                    <label htmlFor="email" className='font-semibold text-[1.3125rem] text-[#303030] tracking-tight'>New Email</label> <br />
                    <input 
                        type="email"  
                        className='py-[0.88rem] pl-[1.12rem] w-2/4 border border-'
                        placeholder='Janedoe@gmail.com'
                    />
                </div>

                <button 
                    onClick={() => alert("Working 🚀")}
                    className='w-fit px-10 py-[0.62rem] rounded-lg text-white bg-[#114CFE]'
                >
                    Change Email
                </button>
            </form>
        </div>

        <div className="mt-[3.63rem]">
            <div className="flex items-center justify-between pt-2">
                <h2 className="font-semibold text-2xl tracking-tight text-[#000D33]">Password Settings</h2>
                <ExpandMoreIcon fontSize="large" className='cursor-pointer'/>
            </div>
            
            <hr className='mt-6'/>

            <form className='mt-[1.44rem]'>
                <div>
                    <label htmlFor="email" className='font-semibold text-[1.3125rem] text-[#303030] tracking-tight'>Current Password</label> <br />
                    <input 
                        type="password"  
                        className='py-[0.88rem] pl-[1.12rem] w-2/4 border border-'
                        placeholder='********'
                    />
                </div>

                <div className='mb-[1.94rem] mt-6'>
                    <label htmlFor="password" className='font-semibold text-[1.3125rem] text-[#303030] tracking-tight'>New Password</label> <br />
                    <input 
                        type="password"  
                        className='py-[0.88rem] pl-[1.12rem] w-2/4 border border-'
                        placeholder='********'
                    />
                </div>

                <button 
                    onClick={() => alert("Working 🚀")}
                    className='w-fit px-10 py-[0.62rem] rounded-lg text-white bg-[#114CFE]'
                >
                    Change Password
                </button>
            </form>
        </div>

        <div className="mt-[3.63rem]">
            <div className="flex items-center justify-between pt-2">
                <h2 className="font-semibold text-2xl tracking-tight text-[#000D33]">Notification Settings</h2>
                <ExpandMoreIcon fontSize="large" className='cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage