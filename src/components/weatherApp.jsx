import sunny from '../assets/images/sunny.png'
import cloudy from '../assets/images/cloudy.png'
import rainy from '../assets/images/rainy.png'
import snowy from '../assets/images/snowy.png'
import { useState } from 'react'

const weatherApp = () => {
    const[data, setadata] = useState({})
    const[location, setLocation] = useState('')
    const api_key = "7c9ae1baf3a352e7525d216cb15e971e"
    const handleInputChange = (e) =>{
        setLocation(e.target.value)
    }
    const search = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`
        const res = await fetch(url)
        const searchData = await res.json()
        console.log(searchData)
        setadata(searchData)
        setLocation('')
    }
  return (
    <div className="container">
        <div className="weather-app">
            <div className="search">
                <div className="search-top">
                   <i className="fa-solid fa-location dot" ></i> 
                   <div className="location">London</div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Enter Location" value={location} onChange={handleInputChange}/>
                   <i className="fa-solid fa-magnifying-glass" onClick={search}></i>

                </div>

            </div>
            <div className="weather">
                <img src={sunny} alt="sunny"/>
                <div className="weather-type">clear</div>
                <div className="temp">28º</div>
            </div>
            <div className="weather-date">
                <p> Fri, 2 Aug</p>
            </div>
            <div className="weather-data">
                <div className="humidity">
                    <div className="data-name">Humidity</div>
                    <i className="fa-solid fa-droplet"></i>
                    <div className="data">35%</div>
                </div>
                <div className="wind">
                    <div className="data-name">Wind</div>
                    <i className="fa-solid fa-wind"></i>
                    <div className="data">3 km/h</div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default weatherApp;