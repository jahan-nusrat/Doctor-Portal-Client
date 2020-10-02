import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<Link to="/appointment">
				<button className="btn btn-primary">Get Appointment</button>
			</Link>
		</div>
	);
};

export default Home;
