import React from 'react';
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart, AiOutlineSend, AiOutlineComment } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import {BsEmojiSmile} from 'react-icons/bs';
function Post({ caption, img, username, userImg, likes }) {
    return (
        <div className='flex-row space-y-2 mt-6'>
            {/* header */}
            <div className='flex items-center space-x-1'>
                <img className='rounded-full w-8 border-[1px] border-gray-300 object-contain' src={userImg} />
                <p className='flex-1 text-xs font-semibold'>{username}</p>
                <FiMoreHorizontal />
            </div>
            {/* photo */}
            <div className='border-[1px] border-gray-300 rounded-sm overflow-hidden'>
                <img src={img} className='w-full' />
            </div>
            {/* comment, like, share */}
            <div className='flex justify-between'>
                <div className='flex space-x-3'>
                    <AiOutlineHeart className="btn" />
                    <AiOutlineComment className="btn" />
                    <AiOutlineSend className="btn" />
                </div>
                <BiBookmark className="btn" />
            </div>
            <p className='font-semibold text-xs cursor-pointer'>{likes} lượt thích</p>
            <div className='text-xs'>
                <span className='font-semibold'>{username}</span><span> {caption}</span>
            </div>
            <div className='flex items-center space-x-1'>
                <input className='outline-none text-xs flex-1' placeholder='Thêm bình luận...'/>
                <BsEmojiSmile className='w-3 h-3 text-gray-500 hover:text-gray-400'/>
            </div>
            <hr />
        </div>
    )
}

export default Post