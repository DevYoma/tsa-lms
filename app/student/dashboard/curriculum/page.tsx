import React from 'react'
import Course from '../components/Course/Course'
import ExploreMore from '../components/ExploreMore/ExploreMore'
import UpSkill from '../components/UpSkill/UpSkill'


export default function CurriculumPage() {
  return (
    <div className="pb-10">
      <p className="font-semibold text-[1.75rem]">Your Courses</p>

      <div className="grid grid-cols-2 gap-x-5 mb-11">
          <Course 
            courseName="Introduction to UI/UX Design"
            noOfWeeks={4}
            progress={20}
            progressBarColor='#F4BC45'
          />
          <Course 
            courseName="Data Analytics Course"
            noOfWeeks={6}
            progress={30}
            progressBarColor='#FF8469'
          />
          <Course 
            courseName="Intro to Frontend Development"
            noOfWeeks={12}
            progress={50}
            progressBarColor='#49F445'
          />

          <ExploreMore />
        </div>

        <div className="mb-4">
          <h3 className="text-[#000D33] text-[1.75rem] font-semibold tracking-[-0.03325rem]">You might like to Learn </h3>
          <p className="text-[#1D1402] tracking-[-0.02138rem] text-[1.125rem] mt-[0.12rem]">Upskill with these new Exciting Courses</p>
        </div>

        {/* UPSKILL COMPONENT */}
        <div className="flex justify-between gap-5">
          <UpSkill />
          <UpSkill />
        </div>
    </div>
  )
}
