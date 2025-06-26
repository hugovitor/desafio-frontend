import { useQuery } from 'react-query'
import axios from 'axios'

const API_KEY = '5d925c75876c4834925131515252606'

const fetchWeather = async (city: string) => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`
  )
  return response.data
}

export const useWeatherApi = (city: string) => {
  return useQuery(['weather', city], () => fetchWeather(city), {
    enabled: !!city,
  })
}
