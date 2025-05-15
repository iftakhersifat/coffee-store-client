import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-center items-center gap-4 mt-10 p-2' style={{ backgroundImage: "url('/assets/images/more/15.jpg')" }}>
                <img className='w-14' src="/assets/images/more/logo1.png" fill="white" alt="" />
                <h1 className='text-2xl font-bold text-white'>Espresso Emporium</h1>
            </div>
    );
};

export default Navbar;