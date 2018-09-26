import React from 'react';
import { BackGround1 , Box } from './style';

const TopicSection = () => (
    <BackGround1>
        <div>
            <div className='row container pt-5 pb-5'>
                <div className='col-sm-3'>
                    <h1>Hello World</h1>
                    <a href='#About'><button type="button" class="btn btn-warning">Join</button></a>
                </div>
                <div className='col-sm-3'>
                    <Box src='images/bever.png' className='img-fluid'></Box>
                </div>
                <div className='col-sm-3'>
                    <Box src='images/bever.png' className='img-fluid'></Box>
                </div>
                <div className='col-sm-3'>
                    <Box src='images/bever.png' className='img-fluid'></Box>
                </div>
            </div>
        </div>
    </BackGround1>
);

export default TopicSection;