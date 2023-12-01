"use client"

import React from 'react';
import Course from './components/Course/Course';
import AssignmentCard from './components/AssignmentCard/AssignmentCard';
import NotificationCard from './components/NotificationCard/NotificationCard';

export default function StudentDashboard() {
  return (
      <div>
        <p className="font-semibold text-[1.75rem]">Welcome Temitope</p>

        <Course />

        <div className="flex">
          {/* ASSIGNMENTS */}
          <AssignmentCard />


          {/* NOTIFICATIONS */}
          <NotificationCard />
        </div>
      </div>
  )
}

