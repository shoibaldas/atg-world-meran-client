import React, { useContext, useState } from 'react';
import Logo from '../../../assets/logo/logo.png'
import {
    FaBars,
    FaTimes
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout, setSignIn, signIn } = useContext(AuthContext);
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const handleLogout = () => {
        setSignIn(!signIn);
        logout();
        navigate('/');
    };

    return (
        <div className='w-full h-[60px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt='Logo' style={{ width: '200px' }} />
            </div>

            {/* Nav Items */}
            <div>
                <ul className='hidden md:flex'>
                    <li className=''>
                        <Link to='/home' className='hover:border-b-2 border-green-600'>
                            Home
                        </Link>
                    </li>
                    {
                        user && user ?
                            <>
                                <li>
                                    <Link className='mx-3'>
                                        <span className='text-green-600'>Hello,</span> {user?.username}
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={handleLogout} className='mx-3 hover:border-b-2 border-green-600'>
                                        Sign Out
                                    </Link>
                                </li>
                            </>
                            :
                            <li>
                                <Link to='/signin' className='mx-3 hover:border-b-2 border-green-600'>
                                    Sign In
                                </Link>
                            </li>
                    }


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
                    <Link onClick={handleClick} to='/home'>
                        Home
                    </Link>
                </li>
                <li className='py-4 text-2xl'>
                    <Link onClick={handleClick} to='/signin'>
                        Sign In
                    </Link>
                </li>

            </ul>

        </div >
    );
};

export default Navbar;