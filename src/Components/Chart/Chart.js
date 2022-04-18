import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2';

const Chart = ({ hourlyTemp }) => {
    const formatTime = (timeInMixedForm) => {
        var a = new Date(timeInMixedForm * 1000);
        var hour = a.getHours();
        var min = a.getMinutes();
        var time = `${hour}:${min} `
        return time;
    }

    const hourly = hourlyTemp.slice(0, 12)
    const timeSlots = hourly.map(hour => formatTime(hour.dt))
    const temps = hourly.map(hour => hour.temp)
    console.log(hourlyTemp);
    console.log(temps);

    const data = {
        labels: timeSlots,
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
        datasets: [
            {
                label: "Weather",
                data: temps,
                fill: true,
                borderColor: "rgb(0, 20, 114)",
                borderWidth: 3,
                lineTension: 0.3,
            }
        ],

    };
    return (
        <div className="container mb-lg-3 mt-4 mt-lg-2" >
            <h2>Hourly Weather</h2>
            <Line data={data} style={{ maxHeight: "22rem" }} />
        </div>
    )
}

export default Chart