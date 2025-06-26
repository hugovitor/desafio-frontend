import { useEffect, useState } from 'react'
import { Box, Heading, Button } from '@chakra-ui/react'
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
    // Garante execução apenas no client
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
    <Box p={8} position="relative">
      <ThemeToggle />
      <Button onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')} mb={4}>
        {language === 'pt' ? 'English' : 'Português'}
      </Button>
      <Heading mb={4}>{labels[language].title}</Heading>
      <CitySelector onSearch={setCity} />
      <UnitToggle unit={unit} setUnit={setUnit} />
      <WeatherCard city={city} unit={unit} />
    </Box>
  )
}
