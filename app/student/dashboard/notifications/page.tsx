import React from 'react'
import NotificationCard from '../components/NotificationCard/NotificationCard'

export default function Notification() {
  return (
    <div>
      <div className="mb-[1.88rem]">
        <h2 className="font-semibold text-[1.75rem] tracking-tight">Notification</h2>
      </div>
      {/* prolly make the Notification card take an array of objects as it props */}
      <NotificationCard showHeader={false}/>
    </div>
  )
}
