import React from 'react';

const CardDetails = ({ cards }) => {
  const { name, chef, price, photo } = cards;

  return (
    <div className='p-4 md:p-0'>
      <div className='flex justify-between items-center space-x-4 p-4 bg-[#F5F4F1] rounded-lg h-[300px]'>
        <div>
          <img src={photo} alt={name} className='w-28 h-28 object-cover rounded' />
        </div>
        <div className='flex flex-col flex-grow space-y-2'>
          <h1 className="text-lg font-semibold">Name: {name}</h1>
          <h2 className="text-md">Chef: {chef}</h2>
          <h3 className="text-md">Price: {price}</h3>
        </div>
        <div className='flex flex-col space-y-2'>
          <button className="btn bg-blue-500 text-white">View</button>
          <button className="btn bg-green-500 text-white">Edit</button>
          <button className="btn bg-red-500 text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
