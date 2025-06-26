import React from 'react'
import { render, screen } from '@testing-library/react'
import { WeatherCard } from '../components/WeatherCard'

vi.mock('../hooks/useWeatherApi', () => ({
  useWeatherApi: (city: string) => ({
    data: {
      location: { name: city, localtime: '2025-06-26 12:00' },
      current: { temp_c: 25, temp_f: 77, condition: { text: 'Ensolarado' }, pressure_mb: 1013 },
      forecast: { forecastday: [
        {
          date: '2025-06-27',
          day: {
            maxtemp_c: 28, mintemp_c: 20, maxtemp_f: 82, mintemp_f: 68,
            condition: { text: 'Ensolarado' }
          }
        }
      ] }
    },
    isLoading: false,
    error: null
  })
}))

test('exibe informações principais do tempo', () => {
  render(<WeatherCard city="São Paulo" unit="C" />)
  expect(screen.getByText('São Paulo')).toBeInTheDocument()
  expect(screen.getByText('25°C')).toBeInTheDocument()
  expect(screen.getAllByText(/Ensolarado/i)[0]).toBeInTheDocument() 
  expect(screen.getByText(/Pressão: 1013 mb/i)).toBeInTheDocument()
})
