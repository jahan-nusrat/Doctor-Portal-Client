import React, { useState } from 'react';
import AppointCalender from './AppointCalender';

const AppointHeroLeft = () => {
    const [selectDate,setSelectDate]= useState(new Date())
    const handleDateChange=(date)=>{
        setSelectDate(date.toDateString())
    }
    console.log(selectDate)
    return (
        <div style={{textAlign:'center'}}>
            <h1>Appointment</h1>
            <AppointCalender handleDateChange={handleDateChange} />
        </div>
    )
}

export default AppointHeroLeft
