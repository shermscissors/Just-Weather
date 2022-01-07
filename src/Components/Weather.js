import '../CSS/Weather.css';
import Search from './Search';
import CurrentConditons from './CurrentConditions';

export default function Weather(props) {
	return (
		<div className='weather'>
			<Search />
			<CurrentConditons />
		</div>
	);
}
