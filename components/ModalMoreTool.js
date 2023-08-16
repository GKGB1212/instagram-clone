"use client"
import React, { useState, useRef, useEffect } from 'react';
import { IoIosSettings, IoIosTimer } from 'react-icons/io';
import { IoBookmarkOutline, IoSunnyOutline } from 'react-icons/io5';
import { TbMessageReport } from "react-icons/tb"

export default function ModalMoreTool({closeModal}) {
    const modalRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const tools = [
        {
            icon: <IoIosSettings className="h-6 w-6" />,
            label: "Cài đặt"
        },
        {
            icon: <IoIosTimer className="h-6 w-6" />,
            label: "Hoạt động của bạn"
        },
        {
            icon: <IoBookmarkOutline className="h-6 w-6" />,
            label: "Đã lưu"
        },
        {
            icon: <IoSunnyOutline className="h-6 w-6" />,
            label: "Chuyển chế độ"
        },
        {
            icon: <TbMessageReport className="h-6 w-6" />,
            label: "Báo cáo sự cố"
        }
    ]
    return (
        <div ref={modalRef} className='absolute bottom-14 left-6 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] w-72 bg-white'>
            <div className='p-2'>
                {tools.map((item, index) => (
                    <ButtonTool>
                        {item.icon}
                        <span>{item.label}</span>
                    </ButtonTool>
                ))}
            </div>
            <hr className='border-4' />
            <div className='p-2'>
                <ButtonTool>
                    <span>Chuyển tài khoản</span>
                </ButtonTool>
            </div>
            <hr />
            <div className='p-2'>
                <ButtonTool>
                    <span>Đăng xuất</span>
                </ButtonTool>
            </div>

        </div>
    )
}

function ButtonTool({ children }) {
    return (
        <div className='flex rounded-xl items-center space-x-2 py-4 px-4 hover:bg-gray-100'>
            {children}
        </div>
    )
}
