export default function ConditionImage(props) {
	return (
		<div id="weather-condition-image">
			<img src={props} alt={props.condition} />
		</div>
	);
}
