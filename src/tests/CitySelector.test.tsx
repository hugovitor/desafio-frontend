import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { CitySelector } from '../components/CitySelector'

test('chama onSearch ao clicar no botão', () => {
  const onSearch = vi.fn()
  render(<CitySelector onSearch={onSearch} />)
  const input = screen.getByPlaceholderText(/Digite o nome da cidade/i)
  fireEvent.change(input, { target: { value: 'Campinas' } })
  fireEvent.click(screen.getByRole('button'))
  expect(onSearch).toHaveBeenCalledWith('Campinas')
})

test('chama onSearch ao pressionar Enter', () => {
  const onSearch = vi.fn()
  render(<CitySelector onSearch={onSearch} />)
  const input = screen.getByPlaceholderText(/Digite o nome da cidade/i)
  fireEvent.change(input, { target: { value: 'Ribeirão' } })
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
  expect(onSearch).toHaveBeenCalledWith('Ribeirão')
})
