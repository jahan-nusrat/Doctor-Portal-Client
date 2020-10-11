import React, { useState } from 'react'
import AppointmentForm from '../AppointForm/AppointmentForm';

const BookingCard = ({ info }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col-lg-4 mb-5">
            <h3>{info.subject}</h3>
            <h2><small>{info.visitingHour}</small></h2>
            <p>{info.totalSpace} space available</p>
            <button className="btn btn-primary" onClick={openModal}>BOOK APPOINTMENT</button>
            <AppointmentForm closeModal={closeModal} appointmentOn={info.subject} modalIsOpen={modalIsOpen} />
        </div>
    )
}

export default BookingCard
