'use client'

import Sidebar from '@/components/Sidebar'
import StudentHeader from '@/components/StudentHeader';

type DashboardLayoutProp = {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProp){

  return (
    <div className="flex h-screen no-scrollbar::-webkit-scrollbar">
      <Sidebar />

      <div className=' overflow-y-scroll flex-1'>
        <StudentHeader />
        <main className="bg-[#FBFCFF] h-full pl-6 pr-[6.25rem]">
          {children}
        </main>
      </div>
    </div>
  )
}