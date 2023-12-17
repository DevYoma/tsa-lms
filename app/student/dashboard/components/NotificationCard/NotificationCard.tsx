"use client"

import './NotificationCard.scss';
import { useRouter } from 'next/navigation';

type Prop = {
  showHeader?: boolean;
}

const NotificationCard = ({ showHeader=true }: Prop) => {
  const router = useRouter();
  const notificationData = [  // can be more or less than 3 from the backend,
    {
      id: 1, 
      title: "Make sure you present your design in a Mockup",
    },
    {
      id: 2, 
      title: "Make sure you present your design in a Mockup", 
    }, 
    {
      id: 3, 
      title: "Make sure you present your design in a Mockup", 
    }
  ]
  return (
    <div className="notificationCard">
      {showHeader && <h2>Notifications</h2>}

      <div className="notificationCard__lists">
        {notificationData.map((notification) => (
            <div 
              key={notification.id}
              className="notificationCard__list"
              onClick={() => router.push('/student/dashboard/notifications')}
            >
              <div className="notificationCard__listDetail">
                <p>Instructor</p>
                <h3>{notification.title}</h3>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationCard