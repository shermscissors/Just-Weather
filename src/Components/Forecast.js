export default function Forecast(props) {
    return(
        <div id="weather-forecast">
            <h1>Tomorrow's Forecast:</h1>
            <h2>High: {props.high} F</h2>
            <h2>Low: {props.low} F</h2>
            <h3>Chance Of Rain: {props.rain}%</h3>
        </div>
    )
}