import React from 'react';

const TopicSection = () => (
        <div>
            <div className='row container pt-5 pb-5'>
                <div className='col-sm-3'>
                    <h1>Hello World</h1>
                    <a href='#About'><button type="button" class="btn btn-warning">Join</button></a>
                </div>
                <div className='col-sm-3'>
                    <img src='images/bever.png' className='img-fluid'/>
                </div>
                <div className='col-sm-3'>
                    <img src='images/bever.png' className='img-fluid'/>
                </div>
                <div className='col-sm-3'>
                    <img src='images/bever.png' className='img-fluid'/>
                </div>
            </div>
        </div>
);

export default TopicSection;