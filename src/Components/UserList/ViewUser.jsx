import React from 'react';
import { useLoaderData } from 'react-router';

const ViewUser = () => {
    const users =useLoaderData();
    // console.log(users);
    const {photo, name, address, email, creationTime}=users
    return (
        <div className="p-4 space-y-4 container mx-auto">
      <h1 className="text-2xl font-bold text-center">User Details</h1>
      <div className='flex justify-center items-center space-x-18 p-4 bg-[#F5F4F1] rounded-lg h-[300px]'>
        <div>
            <img src={photo} alt={name} className="w-48 h-48 object-cover rounded-xl" />
        </div>
      <div className='space-y-3'>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Creation Time:</strong> {creationTime}</p>
      </div>
      </div>
    </div>
    );
};

export default ViewUser;