import { motion } from 'framer-motion'
import { useState } from 'react'
import { Input, Button, HStack } from '@chakra-ui/react'

interface CitySelectorProps {
  onSearch: (city: string) => void
}

const MotionButton = motion(Button)

export function CitySelector({ onSearch }: CitySelectorProps) {
  const [input, setInput] = useState('')

  function handleSearch() {
    if (input.trim()) {
      onSearch(input.trim())
      setInput('')
    }
  }

  return (
    <HStack mb={4}>
      <Input
        placeholder="Digite o nome da cidade"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSearch()}
      />
      <MotionButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSearch}
      >
      <Button onClick={handleSearch}>Buscar</Button>
      </MotionButton>
    </HStack>
  )
}
