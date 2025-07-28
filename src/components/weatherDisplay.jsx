import React, { Fragment, useContext } from "react"
import { WeatherContext } from "../context/weatherContext"

const WeatherDisplay = () => {

    const { weather, loading, error, city } = useContext(WeatherContext)

    if (loading){
        return <p className="text-center trxt-bule-600">Loding Weather...</p>
    }

    if (error) {
        return <p className="text-center text-red-600">{error}</p>
    }
    if (!weather) return null
     return (

         <Fragment>
            <div className="mt-4 p-6 bg-blue-50 rounded-x1 shadow-inner text-center">
                 <h2 className="text-2xl font-semibold text-blue-800 mb-2">{city}</h2>

                    <p>{Math.round(weather.main.temp)} degre celsius</p>
                    <p>{weather.weather[0].description}</p>

            <div className="flex justify-aroundtext-sm text-blue-600 mt-4">
                <div>
                    <p className="font-medium">Humidity</p>
                    <p>{weather.main. humidity}%</p>
                </div>
                <div>
                    <p className="font-medium">wind</p>
                    <p>{weather.wind.speed} m/s</p>
                </div>
                <div>
                    <p className="font-medium">Feels Like</p>
                    <p>{Math.round(weather.main.feels_like)}degree celsius</p>
                </div>
            </div>

            </div>
        </Fragment>   
    )
}

export default WeatherDisplay