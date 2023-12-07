import Image from 'next/image';
import HeaderAvatar from '../public/assets/HeaderAvatar.png';
import NotificationBell from '../public/assets/HeaderNotificationBell.png';

const StudentHeader = () => {
  return (
    <div className="flex items-center justify-end gap-[3.81rem] mb-6 pt-4 pr-[6.25rem]">
        <Image 
            alt='Notification'
            src={NotificationBell}
        />

        <Image 
            alt='Avatar'
            src={HeaderAvatar}
        />
    </div>
  )
}

export default StudentHeader