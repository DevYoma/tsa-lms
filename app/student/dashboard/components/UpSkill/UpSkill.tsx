import React from 'react'
import './UpSkill.scss';
import Image from 'next/image'
import UpskillImg from '@/public/images/webFlow.png';
import Link from 'next/link';
import Duration from '../Duration/Duration';

type Props = {}

const UpSkill = (props: Props) => {
  return (
    <div className="upSkill">
    <Image 
      alt='upskill1'
      src={UpskillImg}
      className="w-full"
    />

    <div className="pt-3 pb-5 px-6">
      <div className="flex justify-between items-center">
        <h4 className="text-[1.75rem] font-semibold tracking-[-0.03325rem] text-[#114CFE]">Webflow: Beginner to Mastery</h4>

        <Duration 
          weeks={4}
          backgroundColor="#E4FFDB"
        />
      </div>

      <p className="text-[#303030] text-[1.75rem] font-semibold tracking-[-0.03325rem] py-2">#20,000</p>

      <div className="mb-[1.44rem]">
        <p className="text-[1.125rem] tracking-[-0.02138rem]">This is a description of what this course is about. It is supposed to be longet than this, anyways the description will be done by the content writer. This is simply place holder.</p>
      </div>

      <Link href={"#"} className="underline text-[#114CFE] text-[1.3125rem] font-semibold">Get the Course</Link>
    </div>
  </div>
  )
}

export default UpSkill;