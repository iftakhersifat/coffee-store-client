import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffees =useLoaderData()
    console.log(coffees);

    const handleUpdateCoffee=e=>{
        e.preventDefault();
    const form = e.target; // Get the form element
    const formData = new FormData(form); // Create FormData from form
    const coffeeData = Object.fromEntries(formData.entries()); // Convert to object
    console.log(coffeeData);


    // for update
        fetch(`http://localhost:3000/coffees/${coffees._id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(coffeeData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.matchedCount){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500
                });

                console.log("show data after update", data)
            }
            
            
    })
    }
    return (
        <div className='container mx-auto mt-10 space-y-6 p-4 md:p-0'>
            <div className='bg-[#F4F3F0] md:p-16 p-6'>
                <div className='text-center space-y-4'>
                <h1 className='font-bold text-2xl'>Update Coffee</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quos quam eos vero vel, blanditiis aliquid dicta ratione nihil, incidunt perspiciatis unde atque ex natus temporibus. Porro eaque ab sunt.</p>
                </div>

                {/* fieldset */}
                <form onSubmit={handleUpdateCoffee}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/* 1st */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Name</legend>
                    <input type="text" className="input w-full" name='name' defaultValue={coffees.name}  placeholder="Enter coffee name" />
                    </fieldset>
                    {/* 2nd */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Chef</legend>
                    <input type="text" className="input w-full" name='chef' defaultValue={coffees.chef} placeholder="Enter coffee chef" />
                    </fieldset>
                    {/* 3rd */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Supplier</legend>
                    <input type="text" className="input w-full" name='supplier' defaultValue={coffees.supplier} placeholder="Enter coffee supplier" />
                    </fieldset>
                    {/* 4th */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Taste</legend>
                    <input type="text" className="input w-full" name='taste' defaultValue={coffees.taste} placeholder="Enter coffee taste" />
                    </fieldset>
                    {/* 5th */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Price</legend>
                    <input type="text" className="input w-full" name='price' defaultValue={coffees.Price} placeholder="Enter coffee price" />
                    </fieldset>
                    {/* 6th */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Details</legend>
                    <input type="text" className="input w-full" name='details' defaultValue={coffees.details} placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                {/* 7th */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo</legend>
                    <input type="text" className="input w-full" name='photo' defaultValue={coffees.photo} placeholder="Enter photo URL" />
                    </fieldset>
                    <button className='btn bg-[#D2B48C] rounded-lg w-full mt-4'>Add Coffee</button>
                </form>
            </div>
            
        </div>
    );
};

export default UpdateCoffee;