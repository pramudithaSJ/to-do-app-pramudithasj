'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'


const Sidebar = () => {
    const sidebarItems = [
        { icon: '/Assets/Dashboard.svg', label: 'Dashboard', link: '/dashboard' },
        { icon: '/Assets/Dashboard.svg', label: 'Sample', link: '/sample' },
    ];
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className="bg-side-bg text-white w-64 h-full p-4">
            <div className='w-full flex justify-center pb-10'>
                <div className=''>
                    <p className='text-2xl font-bold'>Acmy Solution</p>
                </div>

            </div>
            <div>
                <nav >
                    <ul>
                        {sidebarItems.map((item) => (
                            <li key={item.link} className="mb-4">
                                <Link href={item.link}>
                                    <div className={`flex items-center space-x-2 ${pathname === item.link ? 'bg-purple-600 rounded-full p-2' : 'p-2'}`}>
                                        <Image src={item.icon} alt={item.label} width={24} height={24} />
                                        <span>{item.label}</span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

        </div>

    );
};

export default Sidebar;