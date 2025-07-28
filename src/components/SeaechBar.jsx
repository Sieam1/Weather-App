import { Fragment, useContext, useState } from 'react'
import { WeatherContext } from '../context/weatherContext'

const Search = () => {
    const [input, setInput] = useState('')
    const {fatchWeather} = useContext(WeatherContext)

    const SubmitHandler = (e) => {
        e.preventDefault()
        if (input.trim()){
            fatchWeather(input.trim())
            setInput('')
        } 
    }

    return (
        <Fragment>
            <form onSubmit={SubmitHandler} className='flex items-center gap-2 w-full bg-white border border-blue-200 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400 transition' >
               
                <input type='text'
                placeholder='search for city'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                className='flax-grow outline-none bg-transparent text-sm text-gray-800 placeholder-gray-800' />
             <button type='submit'
             className="bg-blue-600 hover:bg-blue-788 text-white px-4 py-2 text-sm rounded-full transition font-medium">
                 search
             </button>
            </form>
        </Fragment>
    )
}

export default Search