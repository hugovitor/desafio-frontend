import { Button, ButtonGroup } from '@chakra-ui/react'

interface UnitToggleProps {
  unit: 'C' | 'F'
  setUnit: (unit: 'C' | 'F') => void
}

export function UnitToggle({ unit, setUnit }: UnitToggleProps) {
  return (
    <ButtonGroup size="sm" isAttached mb={4}>
      <Button onClick={() => setUnit('C')} isActive={unit === 'C'}>°C</Button>
      <Button onClick={() => setUnit('F')} isActive={unit === 'F'}>°F</Button>
    </ButtonGroup>
  )
}
