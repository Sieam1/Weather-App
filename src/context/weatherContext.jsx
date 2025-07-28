import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const WeatherContext = createContext()

export const WeatherProvider = ({children})=>{ 
    const [ city , setCity] = useState('')
    const [weather , setWeather] = useState(null)
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState('')

    const fatchWeather = async(cityName)=>{
        setLoading(true)
        setError('')
        setCity(cityName)

        try {
            const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d2c50980bb96541bb7a7f6238b9674eb&units=metric`)
            const data = await response.json()
            console.log("Weather Data" ,data)
            if(response.ok){
                setWeather(data)
            }else{
                setError(data.message || ' Fetching weather Error')
            }
        } catch (error) {
            setError('Network Error:' + error.message)
        }finally {
            setLoading(false)
        }
    }
    return (
        <WeatherContext.Provider value={{city , weather , loading , error , fatchWeather}}>
            {children}
        </WeatherContext.Provider>
    )
}