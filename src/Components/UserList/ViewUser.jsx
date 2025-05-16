import React from 'react';
import { useLoaderData } from 'react-router';

const ViewUser = () => {
    const users =useLoaderData();
    console.log(users)
    return (
        <div>
            
        </div>
    );
};

export default ViewUser;