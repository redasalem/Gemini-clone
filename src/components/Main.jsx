import React from 'react'
import { assets } from '../assets'
import { Context } from '../context/context'

export const Main = () => {

    const { prevPrompts,setPrevPrompts,inputText,setInputText,OnSent,recentPrompts,isLoading,setRecentPrompts,resultData,showResult} = React.useContext(Context)



  return (
    <div className='flex-1 min-h-screen relative bg-[#fafafa]'>
        {/* nav */}
        <div className='flex items-center justify-between text-xl p-5 text-[#5f6368]'>
            <p className='font-medium text-[#5f6368] text-xl'>Gemini</p>
            <img src={assets.user_icon} className='w-10 h-10 rounded-full cursor-pointer' alt="user_icon" />
        </div>

      {/* main container */}
        <div className="max-w-[900px] mx-auto pt-20 px-6 pb-40">
        

        {!showResult ?
        <>
        {/* Greeting */}
            <div className="text-center mb-16">
                <p className="text-[56px] font-normal mb-3 leading-tight">
                    <span className="text-[#4285f4]">Hello, </span>
                    <span className="text-[#ea4335]">Reda.</span>
                </p>
                <p className="text-[48px] font-light text-[#d3d3d3]">
                    How can I help you today?
                </p>
            </div>

            {/* cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[850px] mx-auto">
                {/* card 1 */}
                <div className="relative h-[180px] p-4 bg-[#f0f4f9] rounded-2xl cursor-pointer hover:bg-[#e8edf5] transition-all duration-200">
                    <p className="text-[#3c4043] text-[15px] leading-snug mb-8">
                        Suggest beautiful places to see on an upcoming road trip
                    </p>
                    <div className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center">
                        <img className="w-5 h-5 opacity-70" src={assets.compass_icon} alt="compass_icon" />
                    </div>
                </div>
            
                {/* card 2 */}
                <div className="relative h-[180px] p-4 bg-[#f0f4f9] rounded-2xl cursor-pointer hover:bg-[#e8edf5] transition-all duration-200">
                    <p className="text-[#3c4043] text-[15px] leading-snug mb-8">
                        Briefly summarize this concept: urban planning
                    </p>
                    <div className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center">
                        <img className="w-5 h-5 opacity-70" src={assets.bulb_icon} alt="bulb_icon" />
                    </div>
                </div>
            
                {/* card 3 */}
                <div className="relative h-[180px] p-4 bg-[#f0f4f9] rounded-2xl cursor-pointer hover:bg-[#e8edf5] transition-all duration-200">
                    <p className="text-[#3c4043] text-[15px] leading-snug mb-8">
                        Brainstorm team bonding activities for our work retreat
                    </p>
                    <div className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center">
                        <img className="w-5 h-5 opacity-70" src={assets.message_icon} alt="message_icon" />
                    </div>
                </div>
            
                {/* card 4 */}
                <div className="relative h-[180px] p-4 bg-[#f0f4f9] rounded-2xl cursor-pointer hover:bg-[#e8edf5] transition-all duration-200">
                    <p className="text-[#3c4043] text-[15px] leading-snug mb-8">
                        Tell me about React.js and React native
                    </p>
                    <div className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center">
                        <img className="w-5 h-5 opacity-70" src={assets.code_icon} alt="code_icon" />
                    </div>
                </div>
            </div>
        </>:
        <div className='w-full space-y-8'>
            {/* User Message */}
            <div className='flex items-start gap-4 justify-end'>
                <div className='max-w-[70%] bg-[#f0f4f9] rounded-2xl rounded-tr-sm py-3 px-5'>
                    <p className='text-[#3c4043] text-[15px] leading-relaxed'>{recentPrompts}</p>
                </div>
                <img className='w-9 h-9 rounded-full' src={assets.user_icon} alt="user_icon" />
            </div>

            {/* Gemini Response */}
            <div className='flex items-start gap-4'>
                <div className='w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-[#4285f4] to-[#ea4335] flex-shrink-0'>
                    <img className='w-5 h-5' src='/images/gemini_icon.png' alt="gemini_icon" />
                </div>
                <div className='flex-1 max-w-[85%]'>
                    {isLoading ? (
                        <div className='space-y-2 py-2'>
                            <div className='h-3 bg-[#e8edf5] rounded-full animate-pulse'></div>
                            <div className='h-3 bg-[#e8edf5] rounded-full animate-pulse w-11/12'></div>
                            <div className='h-3 bg-[#e8edf5] rounded-full animate-pulse w-9/12'></div>
                        </div>
                    ) : (
                        <div className='text-[#3c4043] text-[15px] leading-relaxed' 
                             dangerouslySetInnerHTML={{__html: resultData}}>
                        </div>
                    )}
                </div>
            </div>
        </div>
        
    }
        </div>

             {/* main bottom */}
        <div className='fixed bottom-0 w-full max-w-[calc(100%-280px)] ml-auto bg-linear-to-t from-[#fafafa] via-[#fafafa]/95 to-transparent pt-8 pb-5'>
            <div className='max-w-[900px] mx-auto px-6'>
                {/* search box */}
                <div className='flex items-center gap-4 bg-white py-4 px-6 rounded-full shadow-sm border border-[#e8edf5]'>
                    <input 
                      onChange={(e)=>setInputText(e.target.value)}
                      value={inputText}
                      onKeyDown={(e) => e.key === 'Enter' && inputText && OnSent(inputText)}
                        type="text" 
                        placeholder='Enter a prompt here' 
                        className='flex-1 bg-transparent outline-none text-[16px] text-[#3c4043] placeholder:text-[#9aa0a6]'
                    />
                    <img className='w-6 h-6 cursor-pointer opacity-60 hover:opacity-100 transition-opacity' src={assets.gallery_icon} alt="gallery_icon" />
                    <img className='w-6 h-6 cursor-pointer opacity-60 hover:opacity-100 transition-opacity' src={assets.mic_icon} alt="mic_icon" />
                    {inputText && (
                        <img onClick={()=>OnSent(inputText)} className='w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity' src={assets.send_icon} alt="send_icon" />
                    )}
                </div>

                {/* bottom info */}
                <p className='text-center text-[12px] text-[#5f6368] mt-3.5'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. 
                    <span className='underline cursor-pointer hover:text-[#3c4043] transition-colors ml-1'>Your privacy & Gemini Apps</span>
                </p>
            </div>
        </div>

      

    </div>
  )
}