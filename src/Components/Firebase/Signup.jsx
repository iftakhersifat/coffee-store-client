import React from 'react';

const Signup = () => {
    const handleSignup=e=>{
        e.preventDefault();
        const form = e.target; // Get the form element
        const formData = new FormData(form); // Create FormData from form
        const signup = Object.fromEntries(formData.entries()); // Convert to object
        console.log(signup);
    }
    return (
        <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card md:w-[500px] shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignup} className="fieldset">

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