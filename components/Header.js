import Image from 'next/image'
import React from 'react';
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon
} from '@heroicons/react/solid';
function Header() {
    return (
        <div>
            <div className='flex justify-between max-w-6xl mx-auto mt-5'>
                {/*Left */}
                <div className='relative hidden lg:inline-grid cursor-pointer w-24'>
                    <Image src="https://links.papareact.com/ocw"
                        layout='fill'
                        objectFit='contain' />
                </div>
                <div className='relative hidden max-lg:inline-grid cursor-pointer w-24'>
                    <Image src="https://links.papareact.com/jjm"
                        layout='fill'
                        objectFit='contain' />
                </div>
                {/*Middle */}
                <div className='flex items-center px-2 py-1 bg-gray-200 rounded-md overflow-hidden w-36'>
                    <div>
                        <SearchIcon className="w-5 h-5 text-gray-400" />
                    </div>
                    <input id='search' placeholder='Search' className='outline-none bg-transparent' />
                </div>
                {/*Right */}
                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon className="navBtn" />
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />
                    <PaperAirplaneIcon className="navBtn rotate-45" />
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />
                </div>
            </div>
        </div>
    )
}

export default Header;