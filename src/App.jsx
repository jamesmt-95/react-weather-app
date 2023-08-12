import { useState, useEffect } from 'react';
import axios from 'axios';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Notification from './components/Notification';

import './App.css'


function App() {

  const [weatherData, setWeatherData] = useState([{}]);
  const [search, setSearch] = useState('');
  const [liveLocation, setLiveLocation] = useState({})

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      // console.log(position.coords)
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=93c1619196f0730e2ac8f36c280db570`)
        .then((response) => {
          setWeatherData([response.data])
          response.data.name && setLiveLocation({ latitude, longitude });
        })
        .catch((err) => {
          console.log(err)
          setLiveLocation({})
        })
    });
  }, []);

  // function to handle input search
  const handleKeyUp = (e) => {
    if (e.key === 'Enter' && search.length > 0) {
      // Add '&units=metric' to get temp in °C
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=93c1619196f0730e2ac8f36c280db570`)
        .then((response) => {
          setWeatherData([response.data])
          setSearch('');
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  // function to handle input onchange
  const handleOnChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <section className='main'>
        <div className="overlay">
          <div className="container">
            <SearchBar search={search} handleKeyUp={handleKeyUp} handleOnChange={handleOnChange} />
            <WeatherCard weatherData={weatherData[0]} liveLocation={liveLocation} />
            {Object.keys(liveLocation).length === 0 && <Notification />}
          </div>
        </div>
      </section>



    </>
  )
}

export default App
