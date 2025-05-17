import React, { use } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Signup = () => {

    const {createUser} =use(AuthContext)
    // console.log(createUser)

    const navigate =useNavigate()

    const handleSignup=e=>{
        e.preventDefault();
        const form = e.target; // Get the form element
        const formData = new FormData(form); // Create FormData from form
        const {email, password, ...userDetails} = Object.fromEntries(formData.entries());
        console.log(email, password, userDetails);

        // createUser
        createUser(email, password)
        .then((result) => {
          toast.success("Sign Up Successfully",result.user)

          // Merge metadata with other user details
    const fullUserData = {
        email,
      ...userDetails,
      
      creationTime: result.user?.metadata?.creationTime,
      lastSignInTime: result.user?.metadata?.lastSignInTime
    };

        // save profile info in db
        fetch('http://localhost:3000/users', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(fullUserData)
                })
                  .then(res => res.json())
                  .then(data => {
                    if(data.insertedId){
                        console.log("after send data", data);
                        
                        Swal.fire({
                        title: "User added Successfully!",
                        icon: "success",
                        draggable: true
                      });
                      navigate("/")
                    }
        
                  });


        })
        .catch((error) => {
        toast.error(error)
        });
    }
    return (
        <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card md:w-[500px] shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignup} className="fieldset">

          <label className="label">Name</label>
          <input type="text" className="input w-full" name='name' placeholder="Enter your name" />

          <label className="label">Address</label>
          <input type="text" className="input w-full" name='address' placeholder="Enter your address" />

          <label className="label">Phone</label>
          <input type="text" className="input w-full" name='phone' placeholder="Enter your phone" />

          <label className="label">Photo URl</label>
          <input type="text" className="input w-full" name='photo' placeholder="Photo URL" />

          <label className="label">Email</label>
          <input type="email" className="input w-full" name='email' placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input w-full" name='password' placeholder="Password" />

          <button className="btn btn-neutral mt-4">Sign Up</button>
          <Link to="/signin">Do you have an account? <span className='text-red-500 underline'>Sign In</span></Link>

        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Signup;