import PropTypes from 'prop-types';
import {FaLocationCrosshairs} from 'react-icons/fa6'

const WeatherCard = ({weatherData}) => {
    return (
        <div className="weather-card-wrapper">
            <div className="weather-card">
                <div className="location">
                    <p className="bold location-name">{weatherData.name? weatherData.name : 'City'} <span>{ <FaLocationCrosshairs style={{color:'white', fontSize:'1.2rem'}}/>}</span></p>
                </div>
                <div className="temp">
                   <h1>{weatherData.main? (weatherData.main.temp).toFixed(1) : '0'}°C</h1>
                </div>
                <div className="description">
                   <p className="bold">{weatherData.weather? weatherData.weather[0].main : 'Haze'}</p>
                </div>
            </div>
            <div className="weather-details">
                <div className="feels">
                    <p>Feels Like <span className="bold">{weatherData.main? (weatherData.main.feels_like).toFixed(1) : '0'}°C</span></p>
                </div>
                <div className="humidity">
                    <p>Humidity <span className="bold">{weatherData.main? weatherData.main.humidity : '0'}%</span></p>
                </div>
                <div className="wind">
                    <p>Wind Speed <span className="bold">{weatherData.wind? (weatherData.wind.speed) : '0'} MPH</span></p>
                    {/* <p className='bold'>2 MPH</p> <p>Wind Speed</p> */}
                </div>
            </div>
        </div>
    )
}

WeatherCard.propTypes = {
    weatherData: PropTypes.object,
    liveLocation: PropTypes.any
}

export default WeatherCard