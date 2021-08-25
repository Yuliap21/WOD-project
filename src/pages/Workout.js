import React, { useState, useEffect, useRef } from 'react';

export default function Workout(props) {
	const [workout, setWorkout] = useState({});
	const nameInput = useRef(null); // doc.qs('input#title')
	const subjectInput = useRef(null); // doc.qs('input#body')
	const timeCapInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				console.log('THese are my props', props);
				const response = await fetch(`/api/workouts/`); //${props.match.params.id}
				const data = await response.json();
				setWorkout(data);
				console.log('THis is data', data);
			} catch (error) {
				console.log('NO data'); // console.error(error);
			}
		})();
	}, []);

	const addWorkout = async e => {
		try {
			const response = await fetch(`/api/workouts/`, {
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
		} catch (error) {
			console.error(error);
		}
	};
	//
	// // update ///
	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/workouts/`, {
				//${props.match.params.id}
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
			{!!Object.keys(workout).length ? ( // this may cause problems. google it
				<>
					<h3>{workout.name}</h3>
					<p>{workout.subject}</p>
					<h2>{workout.timeCap}</h2>
					<button onClick={handleDelete}>DELETE ME</button>
				</>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}

// 	return (
// 		<div className="ShowPage">
// 			{Object.keys(bookmark).length ? (
// 				<>
// 					<h3>{bookmark.title}</h3>
// 					<p>{bookmark.url}</p>
// 					<button onClick={handleDelete}>DELETE ME</button>
// 				</>
// 			) : (
// 				<h1> Loading...</h1>
// 			)}
// 			{/*<form
// 				style={{ display: 'flex', flexDirection: 'column' }}
// 				onSubmit={handleUpdate}
// 			>
// 				{' '}
// 			</form>
//       */}
// 		</div>
// 	);
// }
