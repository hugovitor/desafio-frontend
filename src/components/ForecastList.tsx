import { motion } from 'framer-motion'
import { Stack, VStack, Text } from '@chakra-ui/react'
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

export function ForecastList({ forecast, unit }: ForecastListProps) {
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
    <Stack direction={['column', 'row']} spacing={4} mt={4} align="center" justify="center" wrap="wrap">
      {forecast.map((item, idx) => (
        <MotionVStack
          key={item.date}
          borderWidth="1px"
          borderRadius="md"
          p={2}
          minW={80}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
        >
          <Text fontWeight="bold">{formatDate(item.date)}</Text>
          {getWeatherIcon(item.day.condition.text)}
          <Text>{item.day.condition.text}</Text>
          <Text>Max: {unit === 'C' ? item.day.maxtemp_c : item.day.maxtemp_f}°{unit}</Text>
          <Text>Min: {unit === 'C' ? item.day.mintemp_c : item.day.mintemp_f}°{unit}</Text>
        </MotionVStack>
      ))}
    </Stack>
  )
}
