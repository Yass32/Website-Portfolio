import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from "../assets/javascript.png"
import github from "../assets/github.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import node from "../assets/node.png"
import mongodb from "../assets/mongo.png"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] '> {/*Background*/}
        <div className='flex flex-col justify-center items-center h-full text-center'> {/*Container*/}
            <div>
                <p className='inline text-gray-400 font-bold text-4xl border-b-4 border-[#CD0000]'>Skills</p>
                <p className='text-slate-50 py-3'>These are the technologies I've worked with</p>
            </div>
            <div className='grid grid-cols-2 gap-5 mx-20 w-[80%] sm:grid-cols-4'> {/*Skill boxes*/}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={html} alt='html logo' className='mx-auto size-20'/>
                    <p className='text-slate-50 py-2'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={css} alt='css logo' className='mx-auto size-20'/>
                    <p className='text-slate-50 py-2'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={javascript} alt='javascript logo' className='mx-auto size-20'/>
                    <p className='text-slate-50 py-2'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={github} alt='github logo' className='mx-auto size-20'/>
                    <p className='text-slate-50 py-2'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={react} alt='react logo' className='mx-auto size-20'/>
                    <p className='text-slate-50 py-2'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img src={tailwind} alt='tailwind logo' className='mx-auto size-20'/>
                    <p className='text-slate-50 py-2'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={node} alt='node logo' className='mx-auto size-20'/>
                    <p className='text-slate-50 py-2'>NODEJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={mongodb} alt='mongodb logo' className='mx-auto size-20'/>
                    <p className='text-slate-50 py-2'>MONGODB</p>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Skills