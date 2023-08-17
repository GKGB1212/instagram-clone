"use client"
import React, { useEffect, useState, useRef } from 'react'
import Story from './Story';
import { faker } from '@faker-js/faker';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
function Stories() {
    const listRef = useRef(null);
    const [suggestion, setSuggestion] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            _id: faker.datatype.uuid(),
            avatar: faker.image.avatarLegacy(),
            userName: faker.person.fullName()
        }))
        setSuggestion(suggestions);
    }, []);
    const scrollLeft = () => {
        listRef.current.scrollBy({
          left: -300,
          behavior: 'smooth'
        });
      };
    
      const scrollRight = () => {
        listRef.current.scrollBy({
          left: 300,
          behavior: 'smooth'
        });
      };
    return (
        <div className='relative max-w-xl'>
            <div ref={listRef} className='flex space-x-4 pl-6 overflow-hidden'>
                {
                    suggestion.map((profile) => (
                        <Story key={profile._id} profile={profile} />
                    ))
                }
            </div>
            <div className='absolute top-12 left-5 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer' onClick={scrollLeft}>
                <BiChevronLeft className="text-lg"/>
            </div>
            <div className='absolute top-12 right-2 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer' onClick={scrollRight}>
                <BiChevronRight className="text-lg"/>
            </div>
        </div>)
}

export default Stories;