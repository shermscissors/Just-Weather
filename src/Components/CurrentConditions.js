export default function CurrentConditons(props) {
	return (
		<div id="weather-current-conditions">
			<h1>Current Conditions</h1>
			<h2>City:{props.location}</h2>
			<h3>Local Time:{props.localtime}</h3>
			<h4>Temperature:{props.temp_f}</h4>
			<h4>Condition:{props.condition}</h4>
			<h4>Wind:{props.wind_mph}</h4>
		</div>
	);
}
