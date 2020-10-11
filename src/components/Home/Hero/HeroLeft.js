import React from 'react'
import { Link } from 'react-router-dom'

const HeroLeft = () => {
    return (
        <React.Fragment>
            <h1>Your New Smile Starts Here</h1>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae explicabo et.</p>
            <Link to="/appointment">
                <button className="btn btn-primary">Get Appointment</button>
            </Link>
            
        </React.Fragment>
    )
}

export default HeroLeft
