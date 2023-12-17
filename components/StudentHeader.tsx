import Image from 'next/image';
import HeaderAvatar from '../public/assets/HeaderAvatar.png';
import NotificationBell from '../public/assets/HeaderNotificationBell.png';
import { useRouter } from 'next/navigation';

const StudentHeader = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-end gap-[3.81rem] mb-6 py-4 pr-[6.25rem]">
        {/* add number of notification */}
        <Image 
            alt='Notification'
            src={NotificationBell}
            className='cursor-pointer'
            onClick={() => router.push('/student/dashboard/notifications')}
        />

        <Image 
            alt='Avatar'
            src={HeaderAvatar}
            onClick={() => router.push('/student/dashboard/profile')}
            className='cursor-pointer'
        />
    </div>
  )
}

export default StudentHeader