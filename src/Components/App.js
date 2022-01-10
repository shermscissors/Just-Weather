import Navigation from './Navigation';
import Weather from './Weather';

import '../CSS/App.css';

function App() {
	return (
		<div id='home'>
			<nav>
				<Navigation />
			</nav>
			<main>
				<Weather />
			</main>
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
