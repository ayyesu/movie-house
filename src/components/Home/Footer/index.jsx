import React from 'react';

export default function Footer() {
    return (
        <footer className='w-full bg-gray-900'>
            <div className=' container flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center py-6 text-gray-200'>
                <h4 className='text-sm'>
                    Copyright &copy; {new Date().getFullYear()} - All Rights
                    Reserved
                </h4>
                <span className='hidden sm:block'>|</span>
                <p className='text-sm'>Movie Life Court</p>
            </div>
        </footer>
    );
}
