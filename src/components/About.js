import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] '> {/*Background*/}
        <div className='flex flex-col justify-center items-center h-full'> {/*Container*/}
            <div>
                <p className=' text-gray-400 font-bold text-4xl border-b-4 border-[#CD0000]'>About</p>
            </div>
            <div className='flex flex-col justify-center my-6 sm:flex-row '>
                <div className='w-[70%] mb-5 md:w-[50%] h-[40%] mx-20'>
                    <p className='text-gray-500 text-3xl font-semibold sm:text-right'>Hi, I'm Yassir nice to meet you. Please take a look around!</p>
                </div>
                <div className='w-[70%] ml-20  md:w-[50%] h-[40%] mr-10'>
                    <p className='text-slate-50'>I am a passionate and dedicated full stack software engineering student. With a solid foundation in both front-end and back-end technologies, I strive to create seamless and efficient web applications.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About