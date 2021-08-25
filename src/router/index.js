import React from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import Workout from '../pages/Workout';

const AppRouter = () => {
	return (
		<Router>
			<NavBar routes={routes} />
			<Workout />
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						exact
						component={props => <Component page={key} {...props} />}
					></Route>
				))}
				<Route
					path={'/:id'}
					component={props => <Workout page={key} {...props} />}
				></Route>
			</Switch>
		</Router>
	);
};
export default AppRouter;
