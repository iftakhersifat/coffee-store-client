import React from 'react';
import { useNavigate } from 'react-router';
import Footer from '../Footer';
import Navbar from '../Navbar';

const NotFound = () => {
    const navigate =useNavigate();
    const handle=()=>{
        navigate("/")
    }
    return (
        <div>
            <Navbar></Navbar>
            <button onClick={handle} className='p-2 ml-40 md:ml-60 mx-auto font-bold mt-10 bg-blue-300 rounded-xl'>Back to Home</button>
            <img className='text-center lg:ml-[550px]' src="/assets/images/404/404.gif" alt="" />
            <Footer></Footer>
        </div>
    );
};

export default NotFound;