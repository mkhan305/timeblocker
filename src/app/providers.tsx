'use client'; 

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react'; 
import { SessionProvider } from "next-auth/react"; 
import { useColorModeValue, ColorModeScript } from '@chakra-ui/react'; 
import theme from './theme'; 

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
        <SessionProvider> 
          <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            {children}
          </ChakraProvider>
        </SessionProvider> 
    </CacheProvider>
  )
}