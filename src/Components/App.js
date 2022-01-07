import Navigation from './Navigation';
import Weather from './Weather';

import '../CSS/App.css';

function App() {
	return (
		<div>
			<nav>
				<Navigation />
			</nav>
			<main>
				<Weather />
				<div id='placeholder-1'></div>
			</main>
			<footer>
				<p>Credit: Stunt McCartney</p>
			</footer>
		</div>
	);
}

export default App;
