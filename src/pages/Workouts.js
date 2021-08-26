import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Workouts = props => {
	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				console.log(props);
				const response = await fetch(`/api/wods`);
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
				const { name, subject, _id, timeCap } = workout;
				return (
					<div key={_id}>
						<Link to={`/${_id}`}>
							<h2>{name}</h2>
						</Link>
						<h3>{subject}</h3>
						<h4>{timeCap}</h4>
					</div>
				);
			})}
		</div>
	);
};
export default Workouts;
