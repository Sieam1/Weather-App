import { WeatherProvider } from './context/weatherContext'

import './App.css'
import Search from './components/SeaechBar'
import WeatherDisplay from './components/weatherDisplay'
function App() {
return(
  <>
<div className='bg-gray-100 min-h-screen flex  justify-center'>
        <WeatherProvider>
        <div className='max-w-md mx-auto mt-10 text-center '>
           <h1 className='text-2x1 font-bold mb-4'>My Weather App</h1>
           <Search/>
           <WeatherDisplay/>
        </div>
      </WeatherProvider>
</div>

      </>
  )

}
export default App
