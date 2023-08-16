import React from 'react';
import './globals.css';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ModalMoreTool from '../components/ModalMoreTool'
import SearchBox from '../components/SearchBox';
import Feed from '../components/Feed'
export default function page() {
  return (
    <div className='flex'>
      {/* <Header/> */}
      <SideBar/>
      <Feed/>
    </div>
  )
}
