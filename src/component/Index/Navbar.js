import React from 'react';

const Navbar = () => (
    <div className='navbar navbar-expand navbar-light bg-light'>
        <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item active'>
                <a className='nav-link' href='#'>Home<span className='sr-only'>(current)</span></a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='#' Link>product</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link ' href='#'>contact</a>
            </li>
        </ul>
    </div>
);
export default Navbar;