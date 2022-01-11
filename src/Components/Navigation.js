import React from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Navigation.css';

export default function Navigation(props) {
	return (
		<div id='nav-bar'>
			<Link id='title' to='/'>just weather</Link>
			<Link to='/info'>Info</Link>
		</div>
	);
}
