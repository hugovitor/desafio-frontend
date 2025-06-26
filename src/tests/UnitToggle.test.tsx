import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { UnitToggle } from '../components/UnitToggle'

test('chama setUnit ao alternar unidade', () => {
  const setUnit = vi.fn()
  render(<UnitToggle unit="C" setUnit={setUnit} />)
  //screen.debug()
  fireEvent.click(screen.getByText('°F'))
  expect(setUnit).toHaveBeenCalledWith('F')
  fireEvent.click(screen.getByText('°C'))
  expect(setUnit).toHaveBeenCalledWith('C')
})
