// src/components/__tests__/WeatherCard.test.tsx
import { render, screen } from '@testing-library/react'
import { WeatherCard } from '../components/WeatherCard'
import { QueryClient, QueryClientProvider } from 'react-query'

// Mock do hook
jest.mock('../../hooks/useWeatherApi', () => ({
  useWeatherApi: (city: string) => ({
    data: city === 'Erro' ? null : {
      location: { name: 'São Paulo', localtime: '2025-06-26 12:00' },
      current: { temp_c: 25, temp_f: 77, condition: { text: 'Ensolarado' }, pressure_mb: 1013 },
      forecast: { forecastday: [] }
    },
    isLoading: city === 'Loading',
    error: city === 'Erro' ? new Error('Falha') : null
  })
}))

const queryClient = new QueryClient()

function renderWithClient(ui: React.ReactElement) {
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  )
}

test('renderiza loading', () => {
  renderWithClient(<WeatherCard city="Loading" unit="C" />)
  expect(screen.getByRole('status')).toBeInTheDocument()
})

test('renderiza erro', () => {
  renderWithClient(<WeatherCard city="Erro" unit="C" />)
  expect(screen.getByText(/erro ao buscar dados/i)).toBeInTheDocument()
})

test('renderiza dados do tempo', () => {
  renderWithClient(<WeatherCard city="São Paulo" unit="C" />)
  expect(screen.getByText('São Paulo')).toBeInTheDocument()
  expect(screen.getByText('25°C')).toBeInTheDocument()
})
