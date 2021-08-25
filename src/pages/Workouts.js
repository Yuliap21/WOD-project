import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Workouts = props => {
	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				console.log(props);
				const response = await fetch(`/api/workouts/`);
				const data = await response.json();
				setWorkouts(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="workouts">
			{workouts.map(workout => {
				const { name, subject, _id } = workout;
				return (
					<div key={name}>
						<Link to={`/${_id}`}>
							<h2>{subject}</h2>
						</Link>
					</div>
				);
			})}
		</div>
	);
};
export default Workouts;
