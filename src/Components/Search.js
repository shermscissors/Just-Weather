import React, { useState } from 'react';

export default function Search() {
	const [search, setSearch] = useState('');

	function handleChange(event) {
		Event.preventDefault();
	}
	function handleSubmit(event) {
		{
			event.preventDefault();
		}
	}

	return (
		<div id='weather-search'>
			<form action='search'>
				<input type='text' id='search' onChange={handleChange} />
				<button className='search-button' onSubmit={handleSubmit}>
					Search
				</button>
			</form>
		</div>
	);
}
