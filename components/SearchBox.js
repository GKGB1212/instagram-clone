"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { MdCancel } from 'react-icons/md';

function SearchBox() {
    const [valueSearch, setValueSearch] = useState('');
    const handleDelValueSearch = () => {
        setValueSearch('');
    }
    return (
        <div className='rounded-r-xl border-r-[1px] bg-white border-gray-200 max-w-xl animate-slide-in-right'>
            <div className='p-3'>
                <h1 className='font-semibold py-3 text-xl'>Tìm kiếm</h1>
                <div className='flex justify-between items-center bg-gray-100 rounded-lg py-2 px-3 my-2 w-80'>
                    <input value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} className='outline-none bg-transparent font-light text-sm' placeholder='Tim kiếm' />
                    <span className='cursor-pointer group' onClick={handleDelValueSearch}><MdCancel className="text-gray-300 group-hover:text-gray-400" /></span>
                </div>
            </div>
            <hr />
            <div className='flex justify-between p-4'>
                <span className='text-sm font-semibold'>Gần đây</span>
                <span className='text-sm font-semibold text-[#008de9] hover:text-blue-800'>Xoá tất cả</span>
            </div>
            <div>
                <RecentAccountSearched srcAvt='https://scontent.cdninstagram.com/v/t51.2885-19/13741205_1738776383055894_1493730264_a.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=WDWMkSAT3wcAX_uGjEK&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDlTh3o5erU_jlSroGe5hmCnorxqfu0_uR28M027bTq5A&oe=64DD09EB&_nc_sid=10d13b' username="blackpinkofficial" name="BLACKPINK" totalFollow="57" />
                <RecentAccountSearched srcAvt='https://scontent.cdninstagram.com/v/t51.2885-19/13741205_1738776383055894_1493730264_a.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=WDWMkSAT3wcAX_uGjEK&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDlTh3o5erU_jlSroGe5hmCnorxqfu0_uR28M027bTq5A&oe=64DD09EB&_nc_sid=10d13b' username="blackpinkofficial" name="BLACKPINK" totalFollow="57" />
                <RecentAccountSearched srcAvt='https://scontent.cdninstagram.com/v/t51.2885-19/13741205_1738776383055894_1493730264_a.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=WDWMkSAT3wcAX_uGjEK&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDlTh3o5erU_jlSroGe5hmCnorxqfu0_uR28M027bTq5A&oe=64DD09EB&_nc_sid=10d13b' username="blackpinkofficial" name="BLACKPINK" totalFollow="57" />
                <RecentAccountSearched srcAvt='https://scontent.cdninstagram.com/v/t51.2885-19/13741205_1738776383055894_1493730264_a.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=WDWMkSAT3wcAX_uGjEK&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDlTh3o5erU_jlSroGe5hmCnorxqfu0_uR28M027bTq5A&oe=64DD09EB&_nc_sid=10d13b' username="blackpinkofficial" name="BLACKPINK" totalFollow="57" />
                <RecentAccountSearched srcAvt='https://scontent.cdninstagram.com/v/t51.2885-19/13741205_1738776383055894_1493730264_a.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=WDWMkSAT3wcAX_uGjEK&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDlTh3o5erU_jlSroGe5hmCnorxqfu0_uR28M027bTq5A&oe=64DD09EB&_nc_sid=10d13b' username="blackpinkofficial" name="BLACKPINK" totalFollow="57" />
                <RecentAccountSearched srcAvt='https://scontent.cdninstagram.com/v/t51.2885-19/13741205_1738776383055894_1493730264_a.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=WDWMkSAT3wcAX_uGjEK&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDlTh3o5erU_jlSroGe5hmCnorxqfu0_uR28M027bTq5A&oe=64DD09EB&_nc_sid=10d13b' username="blackpinkofficial" name="BLACKPINK" totalFollow="57" />
                <RecentAccountSearched srcAvt='https://scontent.cdninstagram.com/v/t51.2885-19/13741205_1738776383055894_1493730264_a.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=WDWMkSAT3wcAX_uGjEK&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDlTh3o5erU_jlSroGe5hmCnorxqfu0_uR28M027bTq5A&oe=64DD09EB&_nc_sid=10d13b' username="blackpinkofficial" name="BLACKPINK" totalFollow="57" />
                <RecentAccountSearched srcAvt='https://scontent.cdninstagram.com/v/t51.2885-19/13741205_1738776383055894_1493730264_a.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=WDWMkSAT3wcAX_uGjEK&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDlTh3o5erU_jlSroGe5hmCnorxqfu0_uR28M027bTq5A&oe=64DD09EB&_nc_sid=10d13b' username="blackpinkofficial" name="BLACKPINK" totalFollow="57" />
                <RecentAccountSearched srcAvt='https://scontent.cdninstagram.com/v/t51.2885-19/13741205_1738776383055894_1493730264_a.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=WDWMkSAT3wcAX_uGjEK&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDlTh3o5erU_jlSroGe5hmCnorxqfu0_uR28M027bTq5A&oe=64DD09EB&_nc_sid=10d13b' username="blackpinkofficial" name="BLACKPINK" totalFollow="57" />
                
            </div>
        </div>
    )
}

function RecentAccountSearched({ srcAvt, username, name, totalFollow }) {
    return (
        <div className='flex items-center justify-between hover:bg-gray-100 px-4 py-2'>
            <div className='flex-none'>
                <Image width={40} height={40} src={srcAvt} className='rounded-full cursor-pointer' />
            </div>
            <div className='flex-1 px-2'>
                <p className='text-sm font-semibold'>{username}</p>
                <p className='text-xs text-gray-500'>{name} • {totalFollow}</p>
            </div>
            <div className='flex-none'>
                <span className='cursor-pointer group'><MdCancel className="text-gray-300 group-hover:text-gray-400" /></span>
            </div>
        </div>
    )
}

export default SearchBox