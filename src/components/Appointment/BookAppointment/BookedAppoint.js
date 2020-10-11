import React from 'react'
import { useSelector } from 'react-redux'

const BookedAppoint = () => {
    const selectedDate=useSelector(state=>state.selectDate)
    return (
        <div className="container text-center">
            <h1>Available Appointments on {selectedDate || new Date().toDateString()}</h1>
        </div>
    )
}

export default BookedAppoint
