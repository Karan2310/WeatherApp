import React from 'react'
import './RightScreen.css'

const RightScreen = (props) => {
    const details = props.cityInfo

    const formatTime = (time) => {
        var a = new Date(time * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        // var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        var date = `${month} ${date}, ${year} `
        return date;
    }

    console.log(details);
    return (
        <>
            <div className="container-fluid right p-0 m-0">
                <div className="top container">
                    <div className="d-flex flex-column justify-content-center align-items-center">

                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-cloud-sun me-3"></i>
                            <div className="d-flex flex-column my-5">
                                <p id='today'>Today</p>
                                {/* <p id='today-date'>Fri, 11 Nov</p> */}
                                <p id='today-date'>{formatTime(details.weatherInfo.current.dt)}</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column justify-content-center text-center">
                            <div className="d-flex align-items-start justify-content-center">
                                <h1 id='curTemp'> {Math.round(details.weatherInfo.current.temp)}</h1>
                                <span id='deg'> &deg; C</span>
                            </div>
                            <p id='curLocation'>{details.cityResult.name}, {details.cityResult.country}</p>
                            <p id='feel'>Feels like {Math.round(details.weatherInfo.current.feels_like)} . {details.weatherInfo.current.weather[0].main}</p>
                        </div>

                        <div className="my-5 d-flex align-items-center justify-content-between w-100 px-3 extra-info">
                            <div className="d-flex">
                                <i className="fa-solid fa-wind me-2"></i>
                                <p> {details.weatherInfo.current.wind_speed}  m/s</p>
                            </div>
                            <div className="d-flex">
                                <i className="fa-solid fa-droplet me-2"></i>
                                <p>{details.weatherInfo.current.humidity}%</p>
                            </div>
                            <div className="d-flex">
                                <i className="fa-solid fa-gauge me-2"></i>
                                <p>{details.weatherInfo.current.pressure} hPa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightScreen