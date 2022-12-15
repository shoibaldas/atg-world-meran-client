import React, { useState } from 'react';
import Logo from '../../../assets/logo/logo.png'
import {
    FaBars,
    FaTimes
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt='Logo' style={{ width: '200px' }} />
            </div>

            {/* Nav Items */}
            <div>
                <ul className='hidden md:flex'>
                    <li className=''>
                        <Link to='/' className='hover:border-b-2 border-green-600'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/signin' className='mx-10 hover:border-b-2 border-green-600'>
                            Sign In
                        </Link>
                    </li>

                </ul>
            </div>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Items */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute md:hidden top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <div>
                    <img src={Logo} alt='Logo' style={{ width: '200px' }} />
                </div>
                <li className='py-4 text-2xl'>
                    <Link onClick={handleClick} to='/'>
                        Home
                    </Link>
                </li>
                <li className='py-4 text-2xl'>
                    <Link onClick={handleClick} to='/signin'>
                        Sign In
                    </Link>
                </li>

            </ul>

        </div>
    );
};

export default Navbar;