import React, { useEffect, useState } from 'react';

import CurrentConditons from './CurrentConditions';
import Forecast from './Forecast';
import ConditionImage from './ConditionImage';
import Sunrise from './Sunrise';

import '../CSS/Weather.css';

export default function Weather(props) {
	const [search, setSearch] = useState('new york');
	const [forecast, setForecast] = useState(null);

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
			.then((res) => res.json())

			.then((res) => {
				console.log(res)
				setForecast(res)})

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
				city={forecast?.location.name}
				localTime={forecast?.location.localtime}
				temperature={forecast?.current.temp_f}
				condition={forecast?.current.condition.text}
				wind={forecast?.current.wind_mph}
			/>
			<Forecast
				high={forecast?.forecast.forecastday[1].day.maxtemp_f}
				low={forecast?.forecast.forecastday[1].day.mintemp_f}
				rain={forecast?.forecast.forecastday[1].day.daily_chance_of_rain}
			/>
			<ConditionImage photo={forecast?.current.condition.icon}/>
			<Sunrise
				sunrise={forecast?.forecast.forecastday[0].astro.sunrise}
				sunset={forecast?.forecast.forecastday[0].astro.sunset}
				moon={forecast?.forecast.forecastday[0].astro.moon_phase}
			/>
		</div>
	);
}
