import React, { useState, useRef } from 'react';

// import Form from './components/form/Form';
export default function About(props) {
	const nameInput = useRef(null); // doc.qs('input#title')
	const subjectInput = useRef(null); // doc.qs('input#body')
	const timeCapInput = useRef(null);

	const [workout, setWorkout] = useState({
		name: '',
		subject: '',
		timeCap: ''
	});

	const addWorkout = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/wods/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: nameInput.current.value,
					subject: subjectInput.current.value,
					timeCap: timeCapInput.current.value
				})
			});
			const data = await response.json();
			setWorkout(data);
			//console.log('data from post request: ', data);
			nameInput.current.value = '';
			subjectInput.current.value = '';
			timeCapInput.current.value = '';
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="About">
			WorkOut Of the Day {props.page}
			<div className="container">
				<form onSubmit={addWorkout}>
					<input ref={nameInput} type="text" /> <br />
					<input ref={subjectInput} type="text" /> <br />
					<input ref={timeCapInput} type="text" /> <br />
					<input type="submit" value="Add Workout" />
				</form>
				<div>
					<h1>{workout.name ? ` ${workout.name}` : ''}</h1>
					<h2>{workout.subject ? ` ${workout.subject}` : ''}</h2>
					<h3>{workout.timeCap ? `Time Cap: ${workout.timeCap}` : ''}</h3>
				</div>
			</div>
		</div>
	);
}
