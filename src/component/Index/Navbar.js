import React from 'react';

import styled from 'styled-components';
import { removeDotSegments } from 'uri-js';

const Bar = styled.div`
    background-color: #f8bc00;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: fixed;
    width: 100vw;
    height: 60px;
    z-index: 2;
`;
const Item = styled.a`
    color: ${props => props.color};
    &:hover {
        color: ${props => props.hover};
    }
`;

const Navbar = () => (
    <Bar className='navbar navbar-expand'>
        <div className='container'>
            <ul className='navbar-nav mt-2 mt-lg-0'>
                <li className='nav-item active'>
                    <Item className='px-3 nav-link' href='#home' color='#69302c' hover='#69302c'>Logo.png</Item>
                </li>
            </ul>
            <ul className='navbar-nav mr-auto ml-auto mt-2'>
                <li className='nav-item m-0'>
                    <Item className='px-3 nav-link' href='#frontend' color='#ffffff' hover='#69302c'>Front-End</Item>
                </li>
                <li className='nav-item'>
                    <Item className='px-3 nav-link ' href='#design' color='#ffffff' hover='#69302c'>Design</Item>
                </li>
                <li className='nav-item'>
                    <Item className='px-3 nav-link' href='#game' color='#ffffff' hover='#69302c'>Game</Item>
                </li>
                <li className='nav-item'>
                    <Item className='px-3 nav-link ' href='#infra' color='#ffffff' hover='#69302c'>Infra</Item>
                </li>
            </ul>
            <ul className='navbar-nav mr-0 mt-2 mt-lg-0'>
                <li className='nav-item active'>
                    <Item className='nav-link' href='https://passport.kmutt.ac.th/event/hello-world-beaver' color='#ffffff' hover='#69302c'>Register</Item>
                </li>
            </ul>
        </div>
    </Bar>
);
export default Navbar;