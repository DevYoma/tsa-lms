"use client"

import { useRef, useState } from 'react';
import Course from './components/Course/Course';
import AssignmentCard from './components/AssignmentCard/AssignmentCard';
import NotificationCard from './components/NotificationCard/NotificationCard';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackwardIosIcon from '@mui/icons-material/ArrowBackIos';

export default function StudentDashboard() {
  const courseRef = useRef();
  const [arrowDisable, setArrowDisable] = useState<boolean>(true);

  const handleHorizantalScroll = (element: any, speed: any, distance: any, step: any) => {
    let scrollAmount: number = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
      <div className="pb-16">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[1.75rem]">Welcome Temitope</p>
          <div className="flex items-center gap-7">
            <span>4 active courses</span> 
            <div className="flex gap-3  ">
              <IconButton className="bg-[#D9D9D933]" onClick={() => handleHorizantalScroll(courseRef.current, 10, 200, -10)}>
                <ArrowBackwardIosIcon className='m-[0.62rem]'/>
              </IconButton>
              <IconButton className="bg-[#D9D9D933]" onClick={() => handleHorizantalScroll(courseRef.current, 10, 200, 10)}>
                <ArrowForwardIosIcon className='m-[0.62rem]'/>
              </IconButton>
            </div>
          </div>
        </div>


        {/* In a situation where the user has more than 1 course */}
        {/* have a condition to display JUST 1 COURSE WITH 100% AND MULTIPLE ONES WITH 45% FLEX BASIS WIDTH */}
        <div className="flex overflow-x-scroll gap-[1rem] mb-8 no-scrollbar" ref={courseRef}>
          <Course 
            courseName="Introduction to UI/UX Design"
            noOfWeeks={4}
            progress={20}
            progressBarColor='#F4BC45'
          />
          <Course 
            courseName="Data Analytics Course"
            noOfWeeks={6}
            progressBarColor='#FF8469'
            progress={30}
          />
          <Course 
            courseName="Intermediate Backend Engineering"
            noOfWeeks={12}
            progress={50}
          />

          <Course 
            courseName="Intro to Frontend Development"
            noOfWeeks={12}
            progressBarColor='#49F445'
            progress={80}
          />
        </div>

        <div className="flex gap-[1.5rem]">
          <AssignmentCard />

          <NotificationCard />
        </div>
      </div>
  )
}

