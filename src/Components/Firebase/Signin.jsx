import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

const Signin = () => {
    const {signIN} =use(AuthContext)

    const handleSignin=e=>{
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(email, password)

        // use sign in
        signIN(email,password)
        .then(result=>{
            console.log(result.user)
            const signInInfo={
                email,
                lastSignInTime: result.user?.metadata?.lastSignInTime
            }
            fetch('http://localhost:3000/users', {
                              method: 'PATCH',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify(signInInfo)
                            })
                              .then(res => res.json())
                              .then(data => {
                                console.log("after send data", data);
                                // if(data.insertedId){
                                    
                                    
                                //     Swal.fire({
                                //     title: "Sign In Successfully!",
                                //     icon: "success",
                                //     draggable: true
                                //   });
                                // }
                    
                              });
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
         <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card md:w-[500px] shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignin} className="fieldset">

          <label className="label">Email</label>
          <input type="email" className="input w-full" name='email' placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input w-full" name='password' placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign In</button>
          <Link to="/signup">Don't have an account? <span className='text-red-500 underline'>Sign Up</span></Link>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Signin;