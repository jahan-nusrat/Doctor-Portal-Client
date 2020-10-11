import React from 'react'
import { MainComponent } from './Hero.style';

const Hero = (props) => {
    return (
        <MainComponent className="container">
            <div style={{height: '600px'}} className="row justify-content-around align-items-center">
                <div className="col-md-4">
                    {props.childComponent}
                </div>
                <div className="col-md-6">
                    <img src="https://i.ibb.co/hW5s9nw/Mask-Group-1.png" alt="hero-img" className='img-fluid' />
                </div>
            </div>
        </MainComponent>
    )
}

export default Hero
