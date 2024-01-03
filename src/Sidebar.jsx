import React from 'react'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SidebarChat from './SidebarChat';
import { IconButton, Avatar } from '@mui/material';
import { Search } from '@mui/icons-material';

function Sidebar() {
  return (
    <div className='flex flex-col flex-[0.35]'>
      <div className='flex justify-between p-5 border-r-[1px] border-r-gray-300'>
        <Avatar />
        <div className='flex items-center justify-between min-w-[10vw]'>
          <IconButton>
            <DonutLargeIcon className='text-base'/>
          </IconButton>
          <IconButton>
            <ChatIcon className='text-base'/>
          </IconButton>
          <IconButton>
            <MoreVertIcon className='text-base'/>
          </IconButton>
        </div>
      </div>
      <div className='flex items-center bg-[#f6f6f6] h-[39px] p-[10px]'>
        <div className='flex items-center cursor-text bg-white w-full h-[32px] rounded-md'>
          <Search />
          <input className='ml-[10px] outline-none flex-1' placeholder='Search'/>
        </div>
      </div>
        <div className='flex-1 bg-white overflow-scroll'>
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar