import Chat from './Chat'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import Pusher from "pusher-js"
import axios from "./axios"

function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    axios.get('/messages/sync').then(response => {
        setMessages(response.data);
      })
  }, [])
  useEffect(() => {
    const pusher = new Pusher('348a3182023a540701f0', {
      cluster: 'us2'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    }); 
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages])
  console.log(messages);
  return (
    <>
      <div className='m-0'>
        <div className='grid place-items-center h-screen bg-[#dadbd3]'>
          <div className='flex bg-[#ededed] w-[90vw] h-[90vh] shadow-2 m-[-50px]'>
            <Sidebar />
            <Chat messages={messages}/>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
