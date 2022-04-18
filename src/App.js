import { useEffect, useState } from 'react';
import './App.css';
import LeftScreen from './Screen/LeftScreen/LeftScreen';
import RightScreen from './Screen/RightScreen/RightScreen';
import axios from 'axios';
import { API_KEY } from './Constants';

function App() {
  const [input, setInput] = useState("Airoli")
  const [cityInfo, setCityInfo] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    covertToGeo(input)
  }, [])


  const handleInputChange = (e) => {
    setInput(e.currentTarget.value)
  }

  const covertToGeo = (cityName) => {
    setisLoading(true)
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`)
      .then((res) => {
        let result = res.data[0]
        const cityResult = { name: result.name, country: result.country, state: result.state, lon: result.lon, lat: result.lat }
        getWeatherData(cityResult)
      }).catch((err) => {
        alert("No such city found")
        setisLoading(false)
      })
  }

  const getWeatherData = (cityResult) => {
    const lon = cityResult.lon
    const lat = cityResult.lat
    console.log(lon, lat);
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${API_KEY}`)
      .then((res) => {
        setCityInfo({ ...cityInfo, cityResult, weatherInfo: res.data })
        console.log(cityInfo);
        setInput("")
        setisLoading(false)
      })
      .catch((err) => {
        alert(err)
        setisLoading(false)
      })
  }

  const handleSearchCity = (e) => {
    e.preventDefault();
    if (input.trim() === "" || input.trim().length < 3) {
      alert("Please enter a valid city name")
      setInput("")
    }
    else {
      covertToGeo(input)
      setInput("")
    }
  }

  return (
    <div className="App" >
      <div className="container-fluid">
        {isLoading === true ? "isLoading" :
          <div className="row d-flex flex-column-reverse flex-md-row ">
            <div className="col-md-7 col-lg-9 p-0 ">
              <LeftScreen cityInfo={cityInfo} handleInputChange={handleInputChange} handleSearchCity={handleSearchCity} input={input} />
            </div>
            <div className="col-md-5 col-lg-3 p-0 ">
              <div className="affix">
                <RightScreen cityInfo={cityInfo} handleInputChange={handleInputChange} handleSearchCity={handleSearchCity} input={input} /></div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
