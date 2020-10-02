import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Appointment = () => {
	const [ services, setServices ] = useState([]);
	const [ date, setDate ] = useState(new Date());
	const changeDate = (date) => {
		setDate(date);
	};
	useEffect(() => {
		fetch('http://localhost:5000/getServices').then((response) => response.json()).then((data) => {
			setServices(data);
		});
	}, []);
	console.log(services);
	return (
		<div>
			<Calendar onChange={changeDate} value={date} />
			<h3>Available appointments on {date.toDateString('dd/mm/yyyy')}</h3>
			<div className="row">
				{services.map((info) => {
					return (
						<div className="col-lg-4" key={info.id}>
							<h2>{info.subject}</h2>
							<h5>Spaces available: {info.totalSpace}</h5>
							<p>Time: {info.visitingHour}</p>
							<button className="btn btn-info">BOOK Appointment</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Appointment;
