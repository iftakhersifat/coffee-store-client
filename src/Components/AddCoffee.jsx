import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee = e => {
    e.preventDefault();
    const form = e.target; // Get the form element
    const formData = new FormData(form); // Create FormData from form
    const coffeeData = Object.fromEntries(formData.entries()); // Convert to object
    console.log(coffeeData);

        // send coffee data to the db
        fetch('http://localhost:3000/coffees', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(coffeeData)
        })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
                console.log("after send data", data);
                
                Swal.fire({
                title: "Coffee added Successfully!",
                icon: "success",
                draggable: true
              });
            }

          });
        };


    return (
        <div className='container mx-auto mt-10 space-y-6 p-4 md:p-0 mb-20'>
            <div className='bg-[#F4F3F0] md:p-16 p-6'>
                <div className='text-center space-y-4'>
                <h1 className='font-bold text-2xl'>Add New Coffee</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quos quam eos vero vel, blanditiis aliquid dicta ratione nihil, incidunt perspiciatis unde atque ex natus temporibus. Porro eaque ab sunt.</p>
                </div>

                {/* fieldset */}
                <form onSubmit={handleAddCoffee}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/* 1st */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Name</legend>
                    <input type="text" className="input w-full" name='name' placeholder="Enter coffee name" />
                    </fieldset>
                    {/* 2nd */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Chef</legend>
                    <input type="text" className="input w-full" name='chef' placeholder="Enter coffee chef" />
                    </fieldset>
                    {/* 3rd */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Supplier</legend>
                    <input type="text" className="input w-full" name='supplier' placeholder="Enter coffee supplier" />
                    </fieldset>
                    {/* 4th */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Taste</legend>
                    <input type="text" className="input w-full" name='taste' placeholder="Enter coffee taste" />
                    </fieldset>
                    {/* 5th */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Price</legend>
                    <input type="text" className="input w-full" name='Price' placeholder="Enter coffee price" />
                    </fieldset>
                    {/* 6th */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Details</legend>
                    <input type="text" className="input w-full" name='details' placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                {/* 7th */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo</legend>
                    <input type="text" className="input w-full" name='photo' placeholder="Enter photo URL" />
                    </fieldset>
                    <button className='btn bg-[#D2B48C] rounded-lg w-full mt-4'>Add Coffee</button>
                </form>
            </div>
            
        </div>
    );
};

export default AddCoffee;