import React, { useState, useEffect, useRef } from 'react';
import EditForm from '/src/components/form/EditForm';
export default function Workout(props) {
	const [workout, setWorkout] = useState({});
	const nameInput = useRef(null); // doc.qs('input#title')
	const subjectInput = useRef(null); // doc.qs('input#body')
	const timeCapInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				console.log('THese are my props', props);
				const response = await fetch(`/api/wods/${props.match.params.id}`); //${props.match.params.id}
				const data = await response.json();
				setWorkout(data);
				console.log('THis is data', data);
			} catch (error) {
				console.log('NO data'); // console.error(error);
			}
		})();
	}, []);

	// // DELETE ///
	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/wods/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const deletedWorkout = await response.json();
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};

	return (
		<div className="ShowPage">
			{Object.keys(workout).length ? ( // this may cause problems.
				<>
					<h3>{workout.name}</h3>
					<p>{workout.subject}</p>
					<h2>{workout.timeCap}</h2>
					<button onClick={handleDelete}>DELETE</button>
					<EditForm workout={workout} />
					{/*// form form // defaultvalue= ''*/}
				</>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}
