import React from 'react';

const AddCoffee = () => {
    return (
        <div className='container mx-auto mt-10 space-y-6 p-4 md:p-0'>
            <div className='bg-[#F4F3F0] md:p-16 p-6'>
                <div className='text-center space-y-4'>
                <h1 className='font-bold text-2xl'>Add New Coffee</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quos quam eos vero vel, blanditiis aliquid dicta ratione nihil, incidunt perspiciatis unde atque ex natus temporibus. Porro eaque ab sunt.</p>
                </div>

                {/* fieldset */}
                <form>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/* 1st */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Name</legend>
                    <input type="text" className="input w-full" placeholder="Enter coffee name" />
                    </fieldset>
                    {/* 2nd */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Chef</legend>
                    <input type="text" className="input w-full" placeholder="Enter coffee chef" />
                    </fieldset>
                    {/* 3rd */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Supplier</legend>
                    <input type="text" className="input w-full" placeholder="Enter coffee supplier" />
                    </fieldset>
                    {/* 4th */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Taste</legend>
                    <input type="text" className="input w-full" placeholder="Enter coffee taste" />
                    </fieldset>
                    {/* 5th */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Category</legend>
                    <input type="text" className="input w-full" placeholder="Enter coffee category" />
                    </fieldset>
                    {/* 6th */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Details</legend>
                    <input type="text" className="input w-full" placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                {/* 7th */}
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo</legend>
                    <input type="text" className="input w-full" placeholder="Enter photo URL" />
                    </fieldset>
                </form>
            </div>
            <button className='btn bg-[#D2B48C] rounded-lg w-full'>Add Coffee</button>
        </div>
    );
};

export default AddCoffee;