import React from 'react'
import { useSelector } from 'react-redux';
import data from '../../../data/BookingData';
import BookingCard from './BookingCard';

const BookedAppoint = () => {
    const selectedDate=useSelector(state=>state.selectDate)

    return (
        <section className="container text-center">
            <h1>Available Appointments on {selectedDate || new Date().toDateString()}</h1>
            <div className="row">
                {
                    data.map(info => {
                        return <BookingCard info={info} key={info.id} />
                    })
                }
            </div>
        </section>
    )
}

export default BookedAppoint
