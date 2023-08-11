import React from 'react'

function SideBarButton({children,handleOnClick,label, active}) {
  return (
    <div
    onClick={handleOnClick} className='flex group w-full items-center cursor-pointer space-x-2 rounded-xl py-3 px-3 mt-1 hover:bg-gray-100 transition-all duration-200 ease-out'>
        {children}
        <span className={`${!active&&active&&'font-bold'} hidden md:inline`}>{label}</span>
    </div>
  )
}

export default SideBarButton