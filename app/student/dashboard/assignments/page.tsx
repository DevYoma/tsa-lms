"use client";

import React from 'react'
import AssignmentCard from '../components/AssignmentCard/AssignmentCard'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { usePathname } from 'next/navigation';

export default function Assignment() {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <div className=''>
      <div className="mb-[1.88rem] flex items-center justify-between">
        <h2 className="font-semibold text-[1.75rem] tracking-tight">Assignments</h2>

        <div className="">
          <span className='tracking-[-0.019rem] text-[#021D31] opacity-70'>Course</span>: 
          <span className='font-semibold'>Introduction to UI/UX Design</span>
          <ExpandMoreIcon className='cursor-pointer'/>          
        </div>
      </div>

      <div className="">
        <AssignmentCard showHeader={false}/>
      </div>
    </div>
  )
}
