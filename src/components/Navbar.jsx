import React,  {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';
import { TbWorldDownload } from "react-icons/tb";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    console.log(nav);

    return (
        <div className='bg-[#0a192ff0] md:fixed z-20 w-full h-[80px] flex justify-between items-center md:px-20 px-8 text-gray-300'>
            <div className='w-20'>
                <TbWorldDownload style={{height: '50px', width:'50px', color:'#ffffff'}}/>
            </div>
            {/* Menu */}
            <div className='hidden md:flex z-[9999] bg-transparent'>
                <ul className='hidden md:flex tracking-wide'>
                    <li className='text-[#ffd200] hover:text-white '>
                        <Link to="accueil" smooth={true} duration={800}>
                            Accueil
                        </Link>
                    </li>
                    <li className='text-[#ffd200] hover:text-white'>
                        <Link to="presentation" smooth={true} duration={800}>
                            Présentation
                        </Link>
                    </li>
                    <li className='text-[#ffd200] hover:text-white'>
                        <Link to="competences" smooth={true} duration={800}>
                            Compétences
                        </Link>
                    </li>
                    <li className='text-[#ffd200] hover:text-white'>
                        <Link to="projets" smooth={true} duration={800}>
                            Projets
                        </Link>
                    </li>
                    <li className='text-[#ffd200] hover:text-white'>
                        <Link to="contact" smooth={true} duration={800}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-20 text-[#ffd200]'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute z-10 top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="accueil" smooth={true} duration={800}>
                        Accueil
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="presentation" smooth={true} duration={800}>
                        Présentation
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="competences" smooth={true} duration={800}>
                        Compétences
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="projets" smooth={true} duration={800}>
                        Projets
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={800}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;