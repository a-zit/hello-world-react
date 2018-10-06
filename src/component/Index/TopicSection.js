import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: transparent;
    border: 1px solid #69302c;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 10px;
    color: #69302c;
    cursor: pointer;
    &:hover {
        background-color: #69302c;
        border: 1px solid white;
        color: white;
    }
`;

const TopicSection = () => (
    <div className='container'>
        <div className='text-center'>
            <h1>Hello World</h1>
        </div>
        <div className='row container pt-5 pb-5 m-0'>
            <div className='col-sm-3 text-center'>
                <img src='images/bever.png' className='img-fluid' />
                <a href='#frontend'><Button>#FrontEnd</Button></a>
            </div>
            <div className='col-sm-3 text-center'>
                <img src='images/bever.png' className='img-fluid' />
                <a href='#design'><Button>#Design</Button></a>
            </div>
            <div className='col-sm-3 text-center'>
                <img src='images/bever.png' className='img-fluid' />
                <a href='#game'><Button>#Game</Button></a>
            </div>
            <div className='col-sm-3 text-center'>
                <img src='images/bever.png' className='img-fluid' />
                <a href='#infra'><Button>#Infra</Button></a>
            </div>
        </div>
    </div>
);

export default TopicSection;