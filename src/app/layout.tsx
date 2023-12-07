import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import { Providers } from './providers'; 
import { Flex, Heading, Box } from '@chakra-ui/react'; 
import { SwitchModeButton }  from './ThemeButton';
import HamburgerMenu from './HamburgerMenu';
import { HStack } from '@chakra-ui/react'; 
import LoginButton from './LoginButton'; 
import SyncButton from './SyncButton'; 








const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })
const orbitron = Orbitron( { subsets: ['latin'], weight:['400', '500', '600']})

export const metadata: Metadata = {
  title: 'TimeBlocker',
  description: 'MK ED AY',
}

function NavBar() { 

  return ( 
    <HStack p="3em" h="5em" gap={10} justify="space-between" align-items="center" pos="absolute" w="100%">
      <Heading fontWeight="semibold" fontSize={30}>TIMEBLOCKER</Heading> 
      <HStack gap={10} justify="space-between" align-items="center"> 
        <SwitchModeButton/> 

        // sync button 
        <SyncButton/> 

        // login button 
        <LoginButton/> 

        <HamburgerMenu/> 
      </HStack>
    </HStack> 

  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <> 
    <html lang="en">
      <body >
        <main className={inter.className}> 
        <Providers> 
          <NavBar/> 
          {children}
        </Providers>
        </main> 
      </body>
    </html>
    </> 
  )
}
