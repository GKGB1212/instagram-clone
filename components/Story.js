import Image from 'next/image'
import React from 'react'

function Story({ profile }) {
  return (
    <div className='hover:scale-105 transition-all ease-in duration-250'>
      <div className='p-[3px] rounded-full bg-gradient-to-r from-orange-400 to-red-600'>
        <img className='w-14 border-[2px] border-white object-contain rounded-full' src={profile.avatar} alt={profile.userName} />
      </div>
      <p className='text-xs text-gray-900 w-14 whitespace-nowrap overflow-hidden overflow-ellipsis'>{profile.userName}</p>
    </div>
  )
}

export default Story