export default function CurrentConditons(props) {
	return (
		<div id="weather-current-conditions">
			<h1>Current Conditions</h1>
			<h2>City: {props.city}</h2>
			<h4>Local Time: {props.localTime}</h4>
			<h4>Temperature: {props.temperature} F</h4>
			<h4>Condition: {props.condition}</h4>
			<h4>Wind: {props.wind} mph</h4>
		</div>
	);
}
