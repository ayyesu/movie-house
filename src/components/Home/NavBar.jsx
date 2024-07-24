import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// Arror up svg
const ArrowUp = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-200'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 10l7-7m0 0l7 7m-7-7v18'
            />
        </svg>
    );
};

// Menu svg
const Menu = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-200'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
            />
        </svg>
    );
};

const HomPageNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='container flex justify-between items-center  p-4'>
            <div className='container'>
                <div className='nav'>
                    <a href='#' className='logo'>
                        <i className='bx bx-movie-play bx-tada main-color' />
                        Movie<span className='main-color'>Life</span>Court
                    </a>
                    <ul className='nav-menu' id='nav-menu'>
                        <li>
                            <a href='#section1'>Home</a>
                        </li>
                        <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#movies'>Movies</a>
                        </li>
                        <li>
                            <a href='#membership'>Membership</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                        <li>
                            <a href='/home' className='btn btn-hover'>
                                <span>BOOK NOW</span>
                            </a>
                        </li>
                    </ul>
                    {/* MOBILE MENU TOGGLE */}
                    {/* <div className='hamburger-menu' id='hamburger-menu'>
                        <div className='hamburger' />
                    </div> */}
                </div>
            </div>
            <div
                className='py-2 px-4 bg-gray-600 lg:hidden cursor-pointer'
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <Menu />
            </div>
            <div
                id='nav-mobile'
                className={`${
                    isOpen ? 'fixed' : 'hidden'
                } lg:hidden top-0 right-0 left-0 bottom-0 bg-gray-800 z-20`}
            >
                <div className='container flex flex-col h-full justify-between'>
                    <div className='flex justify-end mt-4'>
                        <div
                            className='py-2 px-4 hover:bg-gray-600 cursor-pointer'
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            <i className='fas fa-times text-lg text-gray-200'></i>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col py-8 gap-6'>
                        <Link
                            to='/about'
                            className='w-full text-4xl text-center text-gray-200 hover:underline'
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to='/movies'
                            className='w-full text-4xl text-center text-gray-200 hover:underline'
                            onClick={() => setIsOpen(false)}
                        >
                            Movies
                        </Link>

                        <Link
                            to='/membership'
                            className='w-full text-4xl text-center text-gray-200 hover:underline'
                            onClick={() => setIsOpen(false)}
                        >
                            Membership
                        </Link>
                        <Link
                            to='/contact'
                            className='w-full text-4xl text-center text-gray-200 hover:underline'
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            to='/home'
                            className='text-4xl text-gray-200 btn btn-hover hover:underline'
                            onClick={() => setIsOpen(false)}
                        >
                            <span>BOOK NOW</span>
                        </Link>
                    </div>
                    <div className='w-full flex justify-center mb-6'>
                        <Link
                            to='/'
                            className='flex flex-start overflow-hidden'
                            onClick={() => setIsOpen(false)}
                        >
                            <ArrowUp />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HomPageNav;
