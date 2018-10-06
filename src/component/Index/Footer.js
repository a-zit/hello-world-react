import React from 'react';
import styled from 'styled-components'

const Bar = styled.div`
    background-color: white;
    height: 60px;
    color: #69302c;
`
const Footer = () => (
    <Bar className='pt-3'>
        <div className='text-center'>
            This is footer
        </div>
    </Bar>
);

export default Footer;