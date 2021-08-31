import React, { useState } from 'react';
import './EditForm.scss';
const EditForm = ({ workout }) => {
	//console.log('working', workout);
	//const EditForm = useState('');
	const [name, setName] = useState('');
	const [subject, setSubject] = useState('');
	const [timeCap, setTimeCap] = useState(''); // leaving empty if I don't want to display text
	console.log('THIS IS WORKOUT ->', workout);
	// // UPDATE///
	const handleUpdate = async e => {
		e.preventDefault();
		try {
			const body = { name, subject, timeCap };
			console.log('body is here', body);
			const response = await fetch(`/api/wods/${workout._id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			});
			console.log('this is our RESPONSE', response);
			//const updatedWorkout = await response.json();
		} catch (error) {
			console.error(error);
		}
	};
	//
	// const onSubmit = e =>{
	//   e.preventDefault();
	// };

	// use className="hideForm" to hide on click
	return (
		<>
			<div>
				<input
					onChange={''}
					type="text"
					value={name}
					onChange={e => setName(e.target.value)}
				></input>
				<input
					onChange={''}
					type="text"
					value={subject}
					onChange={e => setSubject(e.target.value)}
				></input>
				<input
					onChange={''}
					type="text"
					value={timeCap}
					onChange={e => setTimeCap(e.target.value)}
				></input>
				<button type="button" onClick={e => handleUpdate(e)}>
					Update
				</button>
			</div>
		</>
	);
};
export default EditForm;
