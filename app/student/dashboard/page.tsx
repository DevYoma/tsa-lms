"use client"

import React from 'react';
import Course from './components/Course/Course';
import AssignmentCard from './components/AssignmentCard/AssignmentCard';
import NotificationCard from './components/NotificationCard/NotificationCard';

export default function StudentDashboard() {
  return (
      <div className="pb-40">
        <p className="font-semibold text-[1.75rem]">Welcome Temitope</p>

        {/* remove the scrollbar and add ARROWS HERE to accomodate the design */}

        {/* In a situation where the user has more than 1 course */}
        {/* have a condition to display JUST 1 COURSE WITH 100% AND MULTIPLE ONES WITH 45% FLEX BASIS WIDTH */}
        <div className="flex overflow-x-scroll gap-[1rem] mb-8">
          <Course 
            courseName="Introduction to UI/UX Design"
            noOfWeeks={4}
            progress={20}
          />
          <Course 
            courseName="Data Analytics Course"
            noOfWeeks={6}
            progress={30}
          />
          <Course 
            courseName="Intermediate Backend Engineering"
            noOfWeeks={12}
            progress={50}
          />
        </div>

        <div className="flex gap-[1.5rem]">
          <AssignmentCard />

          <NotificationCard />
        </div>
      </div>
  )
}

