import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const UserList = () => {

    const [profile, setProfile] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then(res=>res.json())
        .then(data=>{
            setProfile(data)
        })
    },[])
    
    const handelDeleteButton =(_id)=>{
        console.log("deleted this user", _id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          console.log(result.isConfirmed)
          if (result.isConfirmed) {
            fetch(`http://localhost:3000/users/${_id}`, {
                  method: 'DELETE',
                })
                .then(res=>res.json())
                .then(data=>{
                         if (data.deletedCount) {
                      Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
                    }
        
                    // remove from ui without refresh
                    const remainingUsers = profile.filter(user => user._id !== _id)
                        setProfile(remainingUsers)
                    
                })
          }
        });
    }

    return (
        <div className="overflow-x-auto mb-20 container mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          User List
        </th>
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        profile.map((user, index)=><tr key={user._id}>
        <th>
          {index +1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              {/* <div className="text-sm opacity-50"></div> */}
            </div>
          </div>
        </td>
        <td>
          {user.address}
        </td>
        <td>{user.phone}</td>
        <th>
          <Link to={`/users/${user._id}`}><button className="btn bg-blue-500 w-[60px] text-white">View</button></Link>
          <Link to={`/profile/${user._id}`}><button className="btn bg-blue-500 w-[60px] text-white">Edit</button></Link>
          <button onClick={()=>handelDeleteButton(user._id)} className="btn bg-blue-500 w-[60px] text-white">Delete</button>
        </th>
      </tr>)
      }
      
    </tbody>
    
  </table>
</div>
    );
};

export default UserList;