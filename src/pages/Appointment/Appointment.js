import React from 'react'
import AppointHeroLeft from '../../components/Appointment/AppointHeroLeft'
import BookedAppoint from '../../components/Appointment/BookAppointment/BookedAppoint'
import Hero from '../../components/Home/Hero/Hero'
import Nav from '../../components/Home/Navbar/Nav'
import { AppointComponent } from './Appoint.style'

const myComponent=<AppointHeroLeft />

const Appointment = () => {
    return (
        <div>
            <AppointComponent>
                <Nav />
                {
                window.location.pathname==='/appointment' && <Hero childComponent={myComponent} />
                }
            </AppointComponent>
            <BookedAppoint />
        </div>
    )
}

export default Appointment
