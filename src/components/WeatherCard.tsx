import { motion } from 'framer-motion'
import React from 'react'
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
      w="100%"          
      maxW="100vw"      
      bg="whiteAlpha.800"
      _dark={{ bg: 'gray.800', color: 'white' }}
      borderRadius="2xl"
      boxShadow="2xl"
      p={[4, 8]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
        {getWeatherIcon(data.current.condition.text)}
        <Text fontSize="2xl" ml={3} fontWeight="bold">
          {data.current.condition.text}
        </Text>
      </Box>
      <Text fontSize="3xl" fontWeight="bold" color="brand.700">
        {data.location.name}
      </Text>
      <Text fontSize="md" color="gray.500" mb={2}>
        {data.location.localtime}
      </Text>
      <Text fontSize="5xl" fontWeight="bold" color="accent.500">
        {temp}°{unit}
      </Text>
      <Text color="gray.600" mt={2}>Pressão: {data.current.pressure_mb} mb</Text>
      <ForecastList forecast={data.forecast.forecastday} unit={unit} />
    </MotionBox>
  )
}
