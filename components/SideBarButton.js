import React from 'react'

function SideBarButton({children,handleOnClick,label, active, inPage}) {
  return (
    <div
    onClick={handleOnClick} className={`${active&&inPage&&'border-[1px] border-gray-200'} box-border flex group w-full items-center cursor-pointer space-x-3 rounded-lg py-2 px-2 mt-1 hover:bg-gray-100 transition-all duration-200 ease-out`}>
        {children}
        <span className={`${active&&'font-bold'} text-sm hidden md:inline`}>{label}</span>
    </div>
  )
}

export default SideBarButton