import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AppointCalender from './AppointCalender';
import {selectedAppointDate} from '../redux/action'

const AppointHeroLeft = () => {
    const dispatch=useDispatch();
    const [selectDate,setSelectDate]= useState(new Date());
    console.log(selectDate)
    const handleDateChange=(date)=>{
        setSelectDate(date.toDateString())
        dispatch(selectedAppointDate(date.toDateString()))
    }

    return (
        <div style={{textAlign:'center'}}>
            <h1>Appointment</h1>
            <AppointCalender handleDateChange={handleDateChange} />
        </div>
    )
}

export default AppointHeroLeft
