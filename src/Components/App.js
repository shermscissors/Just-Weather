import Navigation from './Navigation';
import Weather from './Weather';

import '../CSS/App.css';

function App() {
	return (
		<body>
			<nav>
				<Navigation />
			</nav>
			<main>
				<Weather />
			</main>
			<footer>
				<p>Credit: Stunt McCartney</p>
			</footer>
		</body>
	);
}

export default App;
