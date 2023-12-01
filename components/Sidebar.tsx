"use client"

import Link from 'next/link';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Logo from './Logo';
import DashboardLogo from '../public/assets/dashboardLogo.png';
import CurriculumLogo from '../public/assets/curicullumLogo.png';
import AssignmentLogo from '../public/assets/assignmentLogo.png';
import RewardLogo from '../public/assets/rewardLogo.png';
import NotificationLogo from '../public/assets/notificationLogo.png';
import LogoutLogo from '../public/assets/logoutLogo.png';
import Image from 'next/image';

export default function Sidebar() {
    const pathname = usePathname();

    const sidebarRoutes = [
        { label: 'Dashboard', route: '/student/dashboard', logo: DashboardLogo },
        { label: 'Curriculum', route: '/student/dashboard/curriculum', logo: CurriculumLogo },
        { label: 'Assignments', route: '/student/dashboard/assignments', logo: AssignmentLogo },
        { label: 'Rewards', route: '/student/dashboard/rewards', logo: RewardLogo },
        { label: 'Notifications', route: '/student/dashboard/notifications', logo: NotificationLogo },
        { label: 'Logout', route: '/student/login', logo: LogoutLogo },
      ];

  return (
    <nav className="border-r w-fit flex flex-col items-center px-16 h-full">
      <div className="mb-20 mt-[3.31rem]">
        <Logo />
      </div>
      <ul>
        {sidebarRoutes.map((route) => (
            <Link 
              href={`${route.route}`}
              className={`${pathname === route.route ? 'active' : ''}`}
              key={route.label}
            >
              <li className="flex items-center gap-4 mb-[3.75rem]">
                  <Image 
                    alt={route.label}
                    src={route.logo}
                  />
                  {route.label}
              </li>
            </Link>
        ))}
      </ul>
    </nav>
  )
}
