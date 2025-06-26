import { useEffect, useState } from 'react'
import { Box, Heading, Button, Flex } from '@chakra-ui/react'
import { WeatherCard } from '../components/WeatherCard'
import { CitySelector } from '../components/CitySelector'
import { UnitToggle } from '../components/UnitToggle'
import { ThemeToggle } from '../components/ThemeToggle'
import { useLanguage } from '../contexts/LanguageContext'

export default function Home() {
  const [city, setCity] = useState('São Paulo')
  const [unit, setUnit] = useState<'C' | 'F'>('C')
  const [locationLoaded, setLocationLoaded] = useState(false)
  const { language, setLanguage } = useLanguage()

  const labels = {
    pt: { title: 'Previsão do Tempo', search: 'Buscar' },
    en: { title: 'Weather Forecast', search: 'Search' },
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setCity(`${latitude},${longitude}`)
          setLocationLoaded(true)
        },
        () => setLocationLoaded(true)
      )
    } else {
      setLocationLoaded(true)
    }
  }, [])

  if (!locationLoaded) return <Box p={8}>Carregando localização...</Box>

  return (
    <Flex
      minH="100vh"
      w="100vw"
      bgGradient="linear(to-br, brand.500, brand.200, accent.500)"
      direction="column"
      align="center"
      justify="flex-start"
      p={[2, 4, 8]}
    >
      <Box w="100%" maxW="lg" mt={8}>
        <ThemeToggle />
        <Button onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')} mb={4}>
          {language === 'pt' ? 'English' : 'Português'}
        </Button>
        <Heading mb={4} textAlign="center">{labels[language].title}</Heading>
        <CitySelector onSearch={setCity} />
        <UnitToggle unit={unit} setUnit={setUnit} />
        <WeatherCard city={city} unit={unit} />
      </Box>
    </Flex>
  )
}
