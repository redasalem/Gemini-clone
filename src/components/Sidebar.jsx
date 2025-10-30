import React from 'react';
import { assets } from '../assets'

const Sidebar = () => {


    const [extended, setExtended] = React.useState(false);
  return (
    // sidebar
    <div className='sidebar h-screen inline-flex flex-col justify-between bg-linear-to-b from-[#f5f7fa] to-[#e8ecf1] py-6 px-4 shadow-lg'>
        {/* top */}
        <div>

             {/* menu icon */}
            <img 
              className='block ml-2.5 cursor-pointer' 
              src={assets.menu_icon} 
              alt='menuIcon' 
              onClick={()=>setExtended(!extended)}
            />

            {/* new chat */}
            <div className='mt-4 inline-flex items-center gap-2.5 py-3 px-5 
              bg-linear-to-r from-[#4a90e2] to-[#357abd] 
              rounded-full text-sm text-white font-medium cursor-pointer 
              shadow-md hover:shadow-xl hover:scale-105 
              transition-all duration-300 hover:-translate-y-0.5'>
                <img className='w-4 h-4 brightness-0 invert' src={assets.plus_icon} alt="plus_icon" />
                {extended?<p>New Chat</p>:null}
            </div>

           {extended?
            <div className='flex flex-col'>
                <p className='mt-8 mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wider px-2.5'>Recent</p>
                
                {/* recent entry */}
                <div className='flex items-center gap-3 py-3 px-4 rounded-xl text-gray-700
                  cursor-pointer transition-all duration-200
                  hover:bg-white hover:shadow-md hover:translate-x-1'>
                    <img className='w-5 h-5 opacity-60' src={assets.message_icon} alt="message_icon" />
                    <p className='truncate text-sm'>What is react...</p>
                </div>
            </div>
           :null}

        </div>


        {/* bottom */}
        <div className='flex flex-col gap-1.5'>
             {/* help entry */}
            <div className='flex items-center gap-3 py-3 px-4 rounded-xl text-gray-700
              cursor-pointer transition-all duration-200 group
              hover:bg-white hover:shadow-md hover:translate-x-1'>
                <img className='w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity' 
                  src={assets.question_icon} alt="question_icon" />
             {extended?<p className='text-sm'>Help</p>:null}   
            </div>

             {/* activity entry */}
            <div className='flex items-center gap-3 py-3 px-4 rounded-xl text-gray-700
              cursor-pointer transition-all duration-200 group
              hover:bg-white hover:shadow-md hover:translate-x-1'>
                <img className='w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity' 
                  src={assets.history_icon} alt="history_icon" />
               {extended?<p className='text-sm'>Activity</p>:null} 
            </div>

             {/* settings entry */}
            <div className='flex items-center gap-3 py-3 px-4 rounded-xl text-gray-700
              cursor-pointer transition-all duration-200 group
              hover:bg-white hover:shadow-md hover:translate-x-1'>
                <img className='w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity' 
                  src={assets.send_icon} alt="send_icon" />
               {extended?<p className='text-sm'>Settings</p>:null} 
            </div>


        </div>


    </div>
  )
}

export default Sidebar