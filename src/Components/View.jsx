import React from 'react';
import { useLoaderData } from 'react-router';

const View = () => {
  const coffee = useLoaderData();
  

  const { name, chef, supplier, taste, photo } = coffee;

  return (
    <div className="p-4 space-y-4 container mx-auto">
      <h1 className="text-2xl font-bold text-center">More Details</h1>
      <div className='flex justify-center items-center space-x-18 p-4 bg-[#F5F4F1] rounded-lg h-[300px]'>
        <div>
            <img src={photo} alt={name} className="w-48 h-64 object-cover rounded" />
        </div>
      <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Chef:</strong> {chef}</p>
      <p><strong>Supplier:</strong> {supplier}</p>
      <p><strong>Taste:</strong> {taste}</p>
      </div>
      </div>
    </div>
  );
};

export default View;
