import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
// import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Workouts from '../pages/Workouts';
import Workout from '../pages/Workout';
const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},

	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: Workouts,
		key: 'Workouts',
		path: '/'
	}
];

export default routes;
