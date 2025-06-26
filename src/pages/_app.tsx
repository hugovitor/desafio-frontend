import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRef } from 'react'
import { LanguageProvider } from '../contexts/LanguageContext'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>(new QueryClient())

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClientRef.current}>
        <LanguageProvider>
          <Component {...pageProps} />
        </LanguageProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
