import React, { useState } from 'react'
import { assets } from '../assets'
import { Context } from '../context/context'

export const Main = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const { prevPrompts, setPrevPrompts, inputText, setInputText, OnSent, recentPrompts, isLoading, setRecentPrompts, resultData, showResult } = React.useContext(Context)

    return (
        <div className='flex-1 min-h-screen relative bg-[#fafafa]'>
            {/* nav */}
            <div className='flex items-center justify-between text-xl p-5 text-[#5f6368] animate-fade-in'>
                <p className='font-medium text-[#5f6368] text-xl animate-slide-left'>Gemini</p>
                <img src={assets.user_icon} className='w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 animate-slide-right' alt="user_icon" />
            </div>

            {/* main container */}
            <div className="max-w-[900px] mx-auto pt-20 px-6 pb-40">

                {!showResult ?
                    <>
                        {/* Greeting */}
                        <div className="text-center mb-16 animate-fade-in-up">
                            <p className="text-[56px] font-normal mb-3 leading-tight animate-scale-in">
                                <span className="text-[#4285f4] animate-pulse-slow">Hello, </span>
                                <span className="text-[#ea4335] animate-pulse-slow" style={{ animationDelay: '0.5s' }}>Reda.</span>
                            </p>
                            <p className="text-[48px] font-light text-[#d3d3d3] animate-fade-in-up" style={{ animationDelay: '1s' }}>
                                How can I help you today?
                            </p>
                        </div>

                        {/* cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[850px] mx-auto">
                            {/* card 1 */}
                            <div
                                className="relative h-[180px] p-4 bg-[#f0f4f9] rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-[#f8faff] hover:to-[#e8edf5] animate-fade-in-up"
                                style={{ animationDelay: '0.1s' }}
                                onMouseEnter={() => setHoveredCard(1)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => OnSent("Suggest beautiful places to see on an upcoming road trip")}
                            >
                                <p className="text-[#3c4043] text-[15px] leading-snug mb-8 transition-colors duration-300">
                                    Suggest beautiful places to see on an upcoming road trip
                                </p>
                                <div className={`absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center transition-all duration-300 ${hoveredCard === 1 ? 'scale-125 rotate-12' : 'scale-100'}`}>
                                    <img className={`w-5 h-5 opacity-70 transition-opacity duration-300 ${hoveredCard === 1 ? 'opacity-100' : ''}`} src={assets.compass_icon} alt="compass_icon" />
                                </div>
                            </div>

                            {/* card 2 */}
                            <div
                                className="relative h-[180px] p-4 bg-[#f0f4f9] rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-[#f8faff] hover:to-[#e8edf5] animate-fade-in-up"
                                style={{ animationDelay: '0.2s' }}
                                onMouseEnter={() => setHoveredCard(2)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => OnSent("Briefly summarize this concept: urban planning")}
                            >
                                <p className="text-[#3c4043] text-[15px] leading-snug mb-8 transition-colors duration-300">
                                    Briefly summarize this concept: urban planning
                                </p>
                                <div className={`absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center transition-all duration-300 ${hoveredCard === 2 ? 'scale-125 rotate-12' : 'scale-100'}`}>
                                    <img className={`w-5 h-5 opacity-70 transition-opacity duration-300 ${hoveredCard === 2 ? 'opacity-100' : ''}`} src={assets.bulb_icon} alt="bulb_icon" />
                                </div>
                            </div>

                            {/* card 3 */}
                            <div
                                className="relative h-[180px] p-4 bg-[#f0f4f9] rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-[#f8faff] hover:to-[#e8edf5] animate-fade-in-up"
                                style={{ animationDelay: '0.3s' }}
                                onMouseEnter={() => setHoveredCard(3)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => OnSent("Brainstorm team bonding activities for our work retreat")}
                            >
                                <p className="text-[#3c4043] text-[15px] leading-snug mb-8 transition-colors duration-300">
                                    Brainstorm team bonding activities for our work retreat
                                </p>
                                <div className={`absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center transition-all duration-300 ${hoveredCard === 3 ? 'scale-125 rotate-12' : 'scale-100'}`}>
                                    <img className={`w-5 h-5 opacity-70 transition-opacity duration-300 ${hoveredCard === 3 ? 'opacity-100' : ''}`} src={assets.message_icon} alt="message_icon" />
                                </div>
                            </div>

                            {/* card 4 */}
                            <div
                                className="relative h-[180px] p-4 bg-[#f0f4f9] rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-[#f8faff] hover:to-[#e8edf5] animate-fade-in-up"
                                style={{ animationDelay: '0.4s' }}
                                onMouseEnter={() => setHoveredCard(4)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => OnSent("Tell me about React.js and React native")}
                            >
                                <p className="text-[#3c4043] text-[15px] leading-snug mb-8 transition-colors duration-300">
                                    Tell me about React.js and React native
                                </p>
                                <div className={`absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center transition-all duration-300 ${hoveredCard === 4 ? 'scale-125 rotate-12' : 'scale-100'}`}>
                                    <img className={`w-5 h-5 opacity-70 transition-opacity duration-300 ${hoveredCard === 4 ? 'opacity-100' : ''}`} src={assets.code_icon} alt="code_icon" />
                                </div>
                            </div>
                        </div>
                    </> :
                    <div className='w-full space-y-8 animate-fade-in'>
                        {/* User Message */}
                        <div className='flex items-start gap-4 justify-end animate-slide-in-right'>
                            <div className='max-w-[70%] bg-[#f0f4f9] rounded-2xl rounded-tr-sm py-3 px-5 shadow-sm hover:shadow-md transition-shadow duration-300'>
                                <p className='text-[#3c4043] text-[15px] leading-relaxed animate-typewriter'>{recentPrompts}</p>
                            </div>
                            <img className='w-9 h-9 rounded-full hover:scale-110 transition-transform duration-300' src={assets.user_icon} alt="user_icon" />
                        </div>

                        {/* Gemini Response */}
                        <div className='flex items-start gap-4 animate-slide-in-left'>
                            <div className='w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-[#4285f4] to-[#ea4335] flex-shrink-0 hover:scale-110 transition-transform duration-300 animate-pulse-slow'>
                                <img className='w-5 h-5' src='/images/gemini_icon.png' alt="gemini_icon" />
                            </div>
                            <div className='flex-1 max-w-[85%]'>
                                {isLoading ? (
                                    <div className='space-y-2 py-2'>
                                        <div className='h-3 bg-[#e8edf5] rounded-full animate-pulse'></div>
                                        <div className='h-3 bg-[#e8edf5] rounded-full animate-pulse w-11/12' style={{ animationDelay: '0.2s' }}></div>
                                        <div className='h-3 bg-[#e8edf5] rounded-full animate-pulse w-9/12' style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                ) : (
                                    <div className='text-[#3c4043] text-[15px] leading-relaxed animate-fade-in-up'
                                        dangerouslySetInnerHTML={{ __html: resultData }}>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                }
            </div>

            {/* main bottom */}
            <div className='fixed bottom-0 w-full max-w-[calc(100%-280px)] ml-auto bg-gradient-to-t from-[#fafafa] via-[#fafafa]/95 to-transparent pt-8 pb-5 animate-slide-up'>
                <div className='max-w-[900px] mx-auto px-6'>
                    {/* search box */}
                    <div className='flex items-center gap-4 bg-white py-4 px-6 rounded-full shadow-sm border border-[#e8edf5] hover:shadow-lg transition-all duration-300 focus-within:shadow-md focus-within:border-[#4285f4]'>
                        <input
                            onChange={(e) => setInputText(e.target.value)}
                            value={inputText}
                            onKeyDown={(e) => e.key === 'Enter' && inputText && OnSent(inputText)}
                            type="text"
                            placeholder='Enter a prompt here'
                            className='flex-1 bg-transparent outline-none text-[16px] text-[#3c4043] placeholder:text-[#9aa0a6] transition-colors duration-300'
                        />
                        <img className='w-6 h-6 cursor-pointer opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300' src={assets.gallery_icon} alt="gallery_icon" />
                        <img className='w-6 h-6 cursor-pointer opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300' src={assets.mic_icon} alt="mic_icon" />
                        {inputText && (
                            <img onClick={() => OnSent(inputText)} className='w-6 h-6 cursor-pointer hover:opacity-80 hover:scale-110 transition-all duration-300 animate-bounce-in' src={assets.send_icon} alt="send_icon" />
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