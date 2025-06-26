import { motion } from 'framer-motion'
import { Box, Text, Spinner } from '@chakra-ui/react'
import { useWeatherApi } from '../hooks/useWeatherApi'
import { ForecastList } from './ForecastList'
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi'

interface WeatherCardProps {
  city: string
  unit: 'C' | 'F'
}

const MotionBox = motion(Box)
export function WeatherCard({ city, unit }: WeatherCardProps) {
  const { data, isLoading, error } = useWeatherApi(city)

  if (isLoading) return <Spinner />
  if (error) return <Text color="red.500">Erro ao buscar dados do tempo.</Text>
  if (!data) return null

  const temp = unit === 'C' ? data.current.temp_c : data.current.temp_f


  function getWeatherIcon(condition: string) {
  const cond = condition.toLowerCase()
  if (cond.includes('rain')) return <WiRain size={32} />
  if (cond.includes('storm')) return <WiThunderstorm size={32} />
  if (cond.includes('cloud')) return <WiCloudy size={32} />
  if (cond.includes('sun')) return <WiDaySunny size={32} />
  if (cond.includes('snow')) return <WiSnow size={32} />
  return <WiDaySunny size={32} />
}

  return (
    <MotionBox
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      minW={300}
      boxShadow="md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box borderWidth="1px" borderRadius="lg" p={6} minW={300} boxShadow="md">
        <Text fontSize="xl" display="flex" alignItems="center">
          {getWeatherIcon(data.current.condition.text)}
          {data.current.condition.text}
        </Text>
        <Text fontSize="2xl" fontWeight="bold">{data.location.name}</Text>
        <Text>{data.location.localtime}</Text>
        <Text fontSize="xl">{data.current.condition.text}</Text>
        <Text fontSize="4xl" fontWeight="bold">{temp}°{unit}</Text>
        <Text color="gray.500" mt={2}>Pressão: {data.current.pressure_mb} mb</Text>
        <ForecastList forecast={data.forecast.forecastday} unit={unit} />
      </Box>
    </MotionBox>
  )
}
