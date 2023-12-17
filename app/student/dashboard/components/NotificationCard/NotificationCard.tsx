import './NotificationCard.scss';

type Prop = {
  showHeader?: boolean;
}

const NotificationCard = ({ showHeader=true }: Prop) => {
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