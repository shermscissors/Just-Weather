import React, { useEffect, useState } from 'react';

import CurrentConditons from './CurrentConditions';
import Forecast from './Forecast';
import ConditionImage from './ConditionImage';
import Sunrise from './Sunrise';

import '../CSS/Weather.css';

export default function Weather(props) {
	const [search, setSearch] = useState('new york');
	const [forecast, setForecast] = useState();

	const key = process.env.REACT_APP_API_KEY;

	function handleChange(event) {
		setSearch(event.target.value);
		console.log(event.target.value);
		event.preventDefault();
	}
	function handleSubmit(event) {
		getWeather();
		event.preventDefault();
	}

	function getWeather() {
		const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${search}&days=3&aqi=no&alerts=no`;

		fetch(url)
			.then((forecast) => forecast.json())

			.then((forecast) => setForecast(forecast.results))

			.catch(console.error);
		console.log('Loading...');
	}
	useEffect(() => {
		getWeather();
		console.log('Loading again...');
	}, []);

	return (
		<div className='weather'>
			<div id='weather-search'>
				<form onSubmit={handleSubmit} id='search-form'>
					<input
						type='text'
						id='search'
						placeholder='Insert City'
						required
						onChange={handleChange}
					/>
					<button className='search-button'>
						<p>Search</p>
					</button>
				</form>
			</div>
			<CurrentConditons
				city={props.location}
				localTime={props.localTime}
				temperature={props.temperature}
				condition={props.condition}
				wind={props}
			/>
			<Forecast />
			<ConditionImage />
			<Sunrise />
		</div>
	);
}
