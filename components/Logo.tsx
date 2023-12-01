import React from 'react'
import TSALogo from '@/public/assets/logo.png';
import Image from 'next/image';

export default function Logo() {
  return (
    <div>
        <Image 
            alt="TSA Logo"
            src={TSALogo}
            priority
        />
    </div>
  )
}
