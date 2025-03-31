import React, {useState} from 'react';
import logo from '../assets/logo.png';
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [navVisibility, setNavVisibility] = useState(true);
    const handleClick = () => setNavVisibility(!navVisibility);

    return (
        <div className='fixed w-full h-[80px] z-10 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'> {/*Background*/}
            <div>
                <img src={logo} alt='Logo' className='w-[12rem]'/>
            </div>

            {/* Menu displyed if above 768px / Medium*/}            
            <ul className='hidden md:flex'>
                <li className='hover:scale-110 duration-300'>
                    <Link to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='hover:scale-110 duration-300'>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='hover:scale-110 duration-300'>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='hover:scale-110 duration-300'>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='hover:scale-110 duration-300'>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            

            {/* Hamburger icon and mobile menu displyed if below 768px / Medium* */}
            <div className='md:hidden z-10' onClick={handleClick}>
                {navVisibility? <FaBars className='size-6'/> : <FaTimes className='size-6'/>}

            </div>

            {/* Mobile menu absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center*/}
            <ul className={navVisibility? 'hidden ' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}> 
                <li className='py-6 text-4xl hover:scale-110 duration-300'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-110 duration-300'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-110 duration-300'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-110 duration-300'>
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-110 duration-300'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons  #CD0000 md:fixed md:flex flex-col top-[35%] left-0 */}
            <div className='hidden md:fixed md:flex flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[150px] h-[50px] flex justify-between items-center bg-blue-700 ml-[-100px] hover:ml-[-8px] duration-300'>
                        <a className='flex justify-between items-center w-full' href='https://www.linkedin.com/in/yassir-zoaka-015916208/'>LinkedIn<FaLinkedin size={25}/></a>
                    </li>
                    <li className='w-[150px] h-[50px] flex justify-between items-center bg-neutral-700 ml-[-100px] hover:ml-[-8px] duration-300'>
                        <a className='flex justify-between items-center w-full' href='https://github.com/Yass32'>Github<FaGithub size={25}/></a>
                    </li>
                    <li className='w-[150px] h-[50px] flex justify-between items-center bg-lime-700 ml-[-100px] hover:ml-[-8px] duration-300'>
                        <a className='flex justify-between items-center w-full' href='/'>Email<HiOutlineMail size={25}/></a>
                    </li>
                    <li className='w-[150px] h-[50px] flex justify-between items-center bg-[#CD0000] ml-[-100px] hover:ml-[-8px] duration-300'>
                        <a className='flex justify-between items-center w-full' href='/'>Resume<BsFillPersonLinesFill size={25}/></a>
                    </li>
                    
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar
