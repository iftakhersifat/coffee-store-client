import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="update">Update</Link>
        </div>
    );
};

export default Navbar;