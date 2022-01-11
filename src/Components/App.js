import Navigation from './Navigation';
import Weather from './Weather';
import Info from './Info';
import { Routes, Route } from 'react-router-dom';

import '../CSS/App.css';

function App() {
	return (
		<div id='home'>
			<nav>
				<Navigation />
			</nav>
			<Routes>
				<Route
					path='/'
					element={
						<main>
							<Weather />
						</main>
					}
				/>
				<Route
					path='/info'
					element={
						<main>
							<Info />
						</main>
					}
				/>
			</Routes>
			<div id='sidebar'></div>
			<footer>
				<h5>
					<em>Credit: Stunt McCartney</em>
				</h5>
			</footer>
		</div>
	);
}

export default App;
