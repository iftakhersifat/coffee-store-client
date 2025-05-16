import React, { use } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

const Signup = () => {

    const {createUser} =use(AuthContext)
    // console.log(createUser)

    const handleSignup=e=>{
        e.preventDefault();
        const form = e.target; // Get the form element
        const formData = new FormData(form); // Create FormData from form
        const {email, password, ...userDetails} = Object.fromEntries(formData.entries());
        console.log(email, password, userDetails);

        // createUser
        createUser(email, password)
        .then((result) => {
          console.log(result.user)

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
                    }
        
                  });


        })
        .catch((error) => {
        console.log(error)
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

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Signup;