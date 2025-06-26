import { motion } from 'framer-motion'
import React from 'react'
import {  VStack, Text, Box, SimpleGrid } from '@chakra-ui/react'
import { formatDate } from '../utils/formatDate'
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi'

interface ForecastDay {
  date: string
  day: {
    maxtemp_c: number
    mintemp_c: number
    maxtemp_f: number
    mintemp_f: number
    condition: { text: string }
  }
}

interface ForecastListProps {
  forecast: ForecastDay[]
  unit: 'C' | 'F'
}

const MotionVStack = motion(VStack)

function getWeatherIcon(condition: string) {
  const cond = condition.toLowerCase()
  if (cond.includes('rain')) return <WiRain size={32} color="#2196f3" />
  if (cond.includes('storm')) return <WiThunderstorm size={32} color="#ff9800" />
  if (cond.includes('cloud')) return <WiCloudy size={32} color="#1976d2" />
  if (cond.includes('sun')) return <WiDaySunny size={32} color="#ffd600" />
  if (cond.includes('snow')) return <WiSnow size={32} color="#00bcd4" />
  return <WiDaySunny size={32} color="#ffd600" />
}

export function ForecastList({ forecast, unit }: ForecastListProps) {
  return (
    <SimpleGrid
      columns={[1, 2, 3]}
      spacing={4}
      w="100%"
      minChildWidth="140px"
      justifyItems="center"
    >
      {forecast.map((item, idx) => (
        <MotionVStack
          key={item.date}
          bg="brand.100"
          _dark={{ bg: 'gray.700' }}
          borderRadius="xl"
          boxShadow="md"
          p={[3, 4]}
          w="100%"
          align="center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.08 }}
        >
          <Text fontWeight="bold" color="brand.700" fontSize={["md", "lg"]}>
            {formatDate(item.date)}
          </Text>
          <Box mb={1}>{getWeatherIcon(item.day.condition.text)}</Box>
          <Text fontSize="sm" color="gray.700" _dark={{ color: 'gray.200' }}>
            {item.day.condition.text}
          </Text>
          <Text color="accent.500" fontWeight="bold">
            Max: {unit === 'C' ? item.day.maxtemp_c : item.day.maxtemp_f}°{unit}
          </Text>
          <Text color="brand.700" fontWeight="bold">
            Min: {unit === 'C' ? item.day.mintemp_c : item.day.mintemp_f}°{unit}
          </Text>
        </MotionVStack>
      ))}
    </SimpleGrid>
  )
}
