import React, { useEffect, useState } from 'react';

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
        console.log("deleted this user", _id)
    }

    return (
        <div className="overflow-x-auto">
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
          <button className="btn bg-blue-500 w-[60px] text-white">View</button>
          <button className="btn bg-blue-500 w-[60px] text-white">Edit</button>
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