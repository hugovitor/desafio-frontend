import React from 'react'
import { useState } from 'react'
import { Input, Button, HStack } from '@chakra-ui/react'


export function CitySelector({ onSearch }: { onSearch: (city: string) => void }) {
  const [input, setInput] = useState('')

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input.trim())
    }
  }

  return (
    <HStack mb={4} w="100%" maxW="md">
      <Input
        placeholder="Digite o nome da cidade"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSearch()}
      />
      <Button onClick={handleSearch} colorScheme="accent">
        Buscar
      </Button>
    </HStack>
  )
}
