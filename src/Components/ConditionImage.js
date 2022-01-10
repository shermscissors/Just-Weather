export default function ConditionImage(props) {
	function handleImageError(event) {
		event.currentTarget.src =
			'https://upload.wikimedia.org/wikipedia/commons/9/94/LetterH.svg';
	}
	
	return (
		<div id="weather-condition-image">
			<img src={props.photo} onError={handleImageError} alt={props.condition} />
		</div>
	);
}
