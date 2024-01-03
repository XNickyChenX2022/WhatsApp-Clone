import React from 'react'
import { Avatar, IconButton } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Mic, Search } from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from "./axios"
import { useState } from 'react';


function Chat({ messages }) {
    const sendMessage = async (e) => {
        e.preventDefault()
        await axios.post('/messages/new', {
            "name":"fasfddsfasdfsasfdsffadsffadfsffsdafsda",
            "message": input,
            "timestamp": new Date().toUTCString(),
            "received": false,
        })
        setInput("");
    };
    const [input, setInput] = useState('')
  return (
    <div className='flex flex-col flex-[0.65]'>
        <div className='p-[17px] flex items-center border-b-[lightgray] border-b-[1px]'>
            <Avatar />
            <div className='flex-1 pl-5'>
                <div className='font-bold text-sm mb-[3px] '>Room name</div>
                <p>Last seen at...</p>
            </div>
            <div>
                <IconButton>
                    <Search />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div> 
        <div className='flex-1 bg- p-[30px] overflow-scroll bg-[#ECE5DD]'>
            {messages.map(message => (
                 <p className={`relative text-base p-[10px] w-fit rounded-[10px]  mb-[30px] ${message.received ? 'ml-auto bg-[#dcf8c6] whitespace-normal' : 'bg-[#ffffff]'}`}>
                 <span className='absolute -top-[20px] font-extrabold text-[xx-small] whitespace-normal'>{message.name}</span>
                     {message.message}
                 <span className='ml-[10px] text-[xx-small]'>{message.timestamp} </span>
                </p> 
            ))}
            {/* <p className='relative text-base p-[10px] w-fit rounded-[10px] bg-[#ffffff] mb-[30px] '>
                <span className='absolute -top-[20px] font-extrabold text-[xx-small] whitespace-normal'>Sonny</span>
                    This is a messagefsad fdsadffdsjahs dfjklfhasflkfsdafsdfadffsdasdfsdsaf jhsdfkjdfshfkl jhsfjsklfda hsfklsdhfj dskfhslafdfhd
                <span className='ml-[10px] text-[xx-small]'>{new Date().toUTCString()} </span>
            </p> 
            <p className='relative text-base p-[10px] w-fit rounded-[10px] mb-[30px] ml-auto bg-[#dcf8c6] whitespace-normal'>
                <span className='absolute -top-[20px] font-extrabold text-[xx-small]'>Sonny</span>
                    This is a message
                <span className='ml-[10px] text-[xx-small]'>{new Date().toUTCString()}</span>
            </p> */}
        </div>
        <div className='flex justify-between items-center h-[62px] border-t-[1px] border-t-[lightgray]'>
            <div class='p-[10px] text-[gray]'><InsertEmoticonIcon />  </div>
            <form className='flex flex-1'>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" className='flex-1 rounded-[30px] p-[10px] border-none'/>
                <button onClick={sendMessage} type='submit' className='hidden'>Send a message</button>
            </form>
                <MicIcon/>
        </div>
    </div>
  )
}

export default Chat