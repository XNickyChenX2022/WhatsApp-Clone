import React from 'react'
import { Avatar } from '@mui/material'
function SidebarChat() {
  return (
    <div className='flex p-5 cursor-pointer border-b-[1px] border-b-white hover:bg-[#ebebeb]'>
        <Avatar />
        <div className='ml-[15px]'>
            <div className='font-medium text-base '>Room Name</div>
            <div className='text-[gray]'>This is the last message</div>
        </div>
    </div>
    
  )
}

export default SidebarChat