import React from 'react'
import bank from '../assets/banksystem.png';
import book from '../assets/bookstore.png';
import quizzie from '../assets/quizzie.png';


const Projects = () => {
  return (
    <div name='projects' className='w-full h-screen bg-[#0a192f] '> {/*Background*/}
      <div className='flex flex-col justify-center items-center h-full text-center'> {/*Container*/}
        <div>
          <p className='inline text-gray-400 font-bold text-4xl border-b-4 border-[#CD0000]'>Projects</p>
          <p className='text-slate-50 py-3'>These are some of my recent projects</p>
        </div>
        {/*Container*/ }
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>

          {/*Grid Item*/ }
          <div style={{backgroundImage: `url(${bank})`}} className='max-w-xs h-64 shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div' >
            
            {/*Hover Effects*/ }
            <div className='content text-white '>
              <span className='text-2xl font-bold  tracking-wider'>Banking System</span>
              <div>
                <a href='/'> 
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-[#0a192f] hover:bg-[#CD0000] duration-300 ease-in'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/ }
          <div style={{backgroundImage: `url(${book})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
            
            {/*Hover Effects*/ }
            <div className='content text-white'>
              <span className='text-2xl font-bold  tracking-wider'>Book Store App</span>
              <div>
                <a href='https://github.com/Yass32/BookStore-MERN'> 
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-[#0a192f] hover:bg-[#CD0000] duration-300 ease-in'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/ }
          <div style={{backgroundImage: `url(${quizzie})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
            
            {/*Hover Effects*/ }
            <div className='content text-white'>
              <span className='text-2xl font-bold  tracking-wider'>Quiz Flask App</span>
              <div>
                <a href='https://github.com/Yass32/Quizzie'> 
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-[#0a192f] hover:bg-[#CD0000] duration-300 ease-in'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/ }
          <div style={{backgroundImage: `url(${bank})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
            
            {/*Hover Effects*/ }
            <div className='content text-white'>
              <span className='text-2xl font-bold  tracking-wider'>Banking System</span>
              <div>
                <a href='/'> 
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-[#0a192f] hover:bg-[#CD0000] duration-300 ease-in'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  ) 
}

export default Projects