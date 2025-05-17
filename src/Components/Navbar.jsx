import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './Context/AuthProvider';

const Navbar = () => {
    const {user, logOut} =use(AuthContext)

    const handelLogout=()=>{
        logOut()
        .then(()=>{
            console.log("Logout successfully!")
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    return (
        <div style={{ backgroundImage: "url('/assets/images/more/15.jpg')" }}>
            <div className='flex justify-between container mx-auto p-4'>
                <div className='flex items-center gap-4'>
                <img className='w-14' src="/assets/images/more/logo1.png" fill="white" alt="" />
                <h1 className='text-2xl font-bold text-white'>Espresso Emporium</h1>
            </div>
            <div className='flex items-center justify-center'>
                {
                    user ? <button onClick={handelLogout} className='btn text-white bg-blue-500 rounded-xl'>LogOut</button> : <Link to="/signup"><button className='btn text-white bg-blue-500 rounded-xl'>Sign Up</button></Link> 
                }
                
                
            </div>
            </div>
        </div>
    );
};

export default Navbar;