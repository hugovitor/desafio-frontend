import { IconButton, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="Alternar tema"
      icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
      position="absolute"
      top={4}
      right={4}
      variant="ghost"
    />
  )
}
