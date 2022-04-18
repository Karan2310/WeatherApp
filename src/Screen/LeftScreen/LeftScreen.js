import React, { useState } from 'react'
import './LeftScreen.css'
import Chart from '../../Components/Chart/Chart'

const LeftScreen = ({ handleInputChange, handleSearchCity, input, cityInfo }) => {
    const formatDate = (date) => {
        var a = new Date(date * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var day = days[a.getDay()]
        var dateNow = `${day}`
        return dateNow;
    }

    // console.log(cityInfo);
    const dailyWeather = cityInfo.weatherInfo.daily
    // console.log(dailyWeather);

    return (
        <>
            <div className="container-fluid left m-0 p-0" style={{ minHeight: "100vh" }}>
                <div className="container-fluid d-flex flex-column flex-lg-row align-items-center justify-content-between p-4">
                    <h1 className='fw-600' style={{ wordSpacing: "0.5rem" }}>Weather Forecast</h1>
                    <div id='searchPlace' className='d-none d-md-flex align-items-center mt-3 mt-lg-0'>
                        <i className="fa-solid fa-magnifying-glass me-2" ></i>
                        <form className="w-100" onSubmit={handleSearchCity}>
                            <input type="text" placeholder='search new places' onChange={handleInputChange} value={input} />
                        </form>
                    </div>
                </div>
                <div className="container-fluid">
                    <h4>Weekly Weather</h4>
                    <div className="table-responsive">
                        <table className="table table-borderless" style={{ minWidth: "30rem" }}>
                            <thead>
                                <tr>
                                    <th scope="col">Day</th>
                                    <th scope="col">Max. Temp</th>
                                    <th scope="col">Min. Temp</th>
                                    <th scope="col">Desc.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dailyWeather.slice(1, 6).map((day, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td style={{ color: "rgb(0 20 114)", fontWeight: "600" }}>{formatDate(day.dt)}</td>
                                                <td className='fw-500'>{Math.round(day.temp.max)} &deg;C</td>
                                                <td className='fw-500'>{Math.round(day.temp.min)} &deg;C</td>
                                                <td className='fw-500'>{day.weather[0].main}</td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Chart */}
                <Chart hourlyTemp={cityInfo.weatherInfo.hourly} />
            </div>
        </>
    )
}

export default LeftScreen