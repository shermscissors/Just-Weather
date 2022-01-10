import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Info from './Info';

import '../CSS/Navigation.css';

export default function Navigation(props) {
	return (
		<div id='nav-bar'>
			<h1 id='title'>just weather</h1>
			<Routes>
				<Route path='/src/Components/Info.js' element={<Info />} />
			</Routes>
		</div>
	);
}
