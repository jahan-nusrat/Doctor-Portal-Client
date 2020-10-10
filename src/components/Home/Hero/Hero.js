import React from 'react'
import { MainComponent } from './Hero.style'

const Hero = () => {
    return (
        <MainComponent className="container">
        <div style={{height: '600px'}} className="row justify-content-around align-items-center">
        <div className="col-md-4">
        <h1>Your New Smile Starts Here</h1>
        <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae explicabo et.</p>
        <button className="btn btn-primary">Get Appointment</button>
        </div>
        <div className="col-md-6">
        <img src="https://i.ibb.co/hW5s9nw/Mask-Group-1.png" alt="hero-img" className='img-fluid' />
        </div>
        </div>
        </MainComponent>
    )
}

export default Hero
