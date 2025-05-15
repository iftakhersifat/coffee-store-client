import React from 'react';
import Swal from 'sweetalert2';

const CardDetails = ({ cards }) => {
  const { _id, name, chef, price, photo } = cards;

  const handleDelete=(_id)=>{
    console.log("delete this", _id)
    // fetch(`http://localhost:3000/coffees/${_id}`,{
    //         method: 'DELETE',
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         if(data.deletedCount){
    //             console.log("delete data", data)
                
    //         }
            
    //     })

    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
  }

  return (
    <div className='p-4 md:p-0'>
      <div className='flex justify-between items-center space-x-4 p-4 bg-[#F5F4F1] rounded-lg h-[300px]'>
        <div>
          <img src={photo} alt={name} className='w-28 h-48 object-cover rounded' />
        </div>
        <div className='flex flex-col text-center flex-grow space-y-2'>
          <h1 className="text-lg font-semibold">Name: {name}</h1>
          <h2 className="text-md">Chef: {chef}</h2>
          <h3 className="text-md">Price: {price}</h3>
        </div>
        <div className='flex flex-col space-y-2'>
          <button className="btn bg-blue-500 text-white">View</button>
          <button className="btn bg-green-500 text-white">Edit</button>
          <button onClick={()=>handleDelete(cards._id)} className="btn bg-red-500 text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
