import React from 'react'
import { render, screen } from '@testing-library/react'
import { ForecastList } from '../components/ForecastList'

const forecast = [
  {
    date: '2025-06-27',
    day: {
      maxtemp_c: 28, mintemp_c: 20, maxtemp_f: 82, mintemp_f: 68,
      condition: { text: 'Ensolarado' }
    }
  },
  {
    date: '2025-06-28',
    day: {
      maxtemp_c: 22, mintemp_c: 16, maxtemp_f: 72, mintemp_f: 60,
      condition: { text: 'Chuvoso' }
    }
  }
]

test('renderiza cards de previsão para cada dia', () => {
  render(<ForecastList forecast={forecast} unit="C" />)
  expect(screen.getByText('Max: 28°C')).toBeInTheDocument()
  expect(screen.getByText('Min: 20°C')).toBeInTheDocument()
  expect(screen.getByText('Max: 22°C')).toBeInTheDocument()
  expect(screen.getByText('Min: 16°C')).toBeInTheDocument()
  expect(screen.getByText(/Ensolarado/i)).toBeInTheDocument()
  expect(screen.getByText(/Chuvoso/i)).toBeInTheDocument()
})
