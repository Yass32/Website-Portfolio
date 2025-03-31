import React from 'react';
import photo from '../assets/photo.jpg';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] '> {/*Background*/}
        <div className='flex flex-row justify-center items-center h-full'> {/*Container*/}
            <div className='md:w-[50%] h-[35%] mx-20'>
                <p className='text-[#CD0000]'>Hi there, my name is</p>
                <p className='text-gray-400 font-bold text-5xl md:text-4xl'>Yassir Zoaka</p>
                <p className='text-gray-600 font-semibold text-5xl md:text-4xl'>I'm a Full Stack Developer</p>
                <p className='text-slate-50 '>I am a fullstack developer specializing in MongoDB Expressjs React Node tech stack to create exceptional and responsive full stack web applications.</p>
                <button className='flex text-slate-50 border-2 px-5 py-2 my-2 hover:bg-[#CD0000] duration-300 ease-in group hover:border-[#CD0000]'>
                    Portfolio <HiArrowNarrowRight className='ml-2 my-1 group-hover:rotate-90 duration-300 ease-in-out'/>
                </button>
            </div>
            {/*Hide image on mobile*/}
            <div className='hidden md:flex w-[40%] h-[40%] mr-16'>
                <img src={photo} alt='profile' className='w-full h-full object-cover rounded-full shadow-lg'/>
            </div>
        </div>
    </div>
  )
}

export default Home



