"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import SideBarButton from './SideBarButton'
import { GoHome, GoHomeFill } from 'react-icons/go';
import { IoSearchOutline, IoSearch, IoMenu, IoMenuOutline } from 'react-icons/io5'
import { RiCompassDiscoverFill, RiCompassDiscoverLine, RiMessengerLine, RiMessengerFill, RiHeart3Fill, RiHeart3Line } from 'react-icons/ri'
import { TbSquareRoundedPlusFilled, TbSquareRoundedPlus } from 'react-icons/tb';
import { FaInstagram } from 'react-icons/fa';
function SideBar() {
    const [active, setActive] = useState(0);
    const [activeMore, setActiveMore] = useState(false);
    const listTool = [
        {
            icon: (<GoHome className='navBtnSideBar' />),
            iconActive: (<GoHomeFill className='navBtnSideBar' />),
            label: 'Trang chủ',
        },
        {
            icon: (<IoSearchOutline className='navBtnSideBar' />),
            iconActive: (<IoSearch className='navBtnSideBar' />),
            label: 'Tìm kiếm',
        },
        {
            icon: (<RiCompassDiscoverLine className='navBtnSideBar' />),
            iconActive: (<RiCompassDiscoverFill className='navBtnSideBar' />),
            label: 'Khám phá',
        },
        {
            icon: (<RiHeart3Line className='navBtnSideBar' />),
            iconActive: (<RiHeart3Fill className='navBtnSideBar' />),
            label: 'Thông báo',
        },
        {
            icon: (<RiMessengerLine className='navBtnSideBar' />),
            iconActive: (<RiMessengerFill className='navBtnSideBar' />),
            label: 'Thông báo',
        },
        {
            icon: (<TbSquareRoundedPlus className='navBtnSideBar' />),
            iconActive: (<TbSquareRoundedPlusFilled className='navBtnSideBar' />),
            label: 'Tạo',
        },
        {
            icon: (<Image className='navBtnSideBar rounded-full' />),
            iconActive: (<Image className='navBtnSideBar rounded-full border-2' />),
            label: 'Trang cá nhân',
        }
    ];
    const handleOnClickBtn = (tool, index) => {
        setActive(index);
    }
    const handleClickMore = () => {
        setActiveMore(true)
    }
    return (
        <div className='relative max-md:w-[75px] max-w-[250px] h-[100vh] border-r-2 px-2'>
            <div className='relative hidden md:inline-grid cursor-pointer w-28 h-24 ml-5'>
                <Image src="https://links.papareact.com/ocw"
                    layout='fill'
                    objectFit='contain' />
            </div>
            <div className='relative hidden max-md:inline-grid'>
                <SideBarButton label="Xem thêm" >
                    <FaInstagram className='navBtnSideBar' />
                </SideBarButton>
            </div>
            <div className='flex-row justify-between'>
                <div>
                    {
                        listTool.map((tool, index) => (
                            <SideBarButton label={tool.label} active={active == index ? true : false} handleOnClick={() => handleOnClickBtn(tool, index)}>
                                {active == index ?
                                    (tool.iconActive)
                                    : (tool.icon)}
                            </SideBarButton>
                        ))
                    }
                </div>
                <div className='absolute left-3 bottom-5 right-3' onClick={handleClickMore}>
                    <SideBarButton label="Xem thêm" >
                        {activeMore ?
                            (<IoMenu className='navBtnSideBar' />)
                            : (<IoMenuOutline className='navBtnSideBar' />)}
                    </SideBarButton>
                </div>
            </div>
        </div>
    )
}

export default SideBar