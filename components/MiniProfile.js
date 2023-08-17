import Image from 'next/image'
import React from 'react'

function MiniProfile() {
    return (
        <div className='flex space-x-3 items-center justify-between my-4'>
            <Image width={40} height={40} className='rounded-full object-contain' src='https://scontent.cdninstagram.com/v/t51.2885-19/360608365_675430473916391_6977199218092712936_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=Rqy9wn4DkmkAX_WS9id&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDADQzoL2_VF3L8yHpfQXYe3BqzOpt7oHzfD8_VFnVBWg&oe=64E1053F&_nc_sid=10d13b' />
            <div className='flex-1'>
                <p className='text-xs font-semibold'>g.kgb</p>
                <p className='text-xs text-gray-700'>Gia Bình</p>
            </div>
            <p className='text-xs font-semibold text-blue-500'>Chuyển</p>
        </div>
    )
}

export default MiniProfile