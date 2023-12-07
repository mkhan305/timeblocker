import Image from 'next/image'
import styles from './page.module.css'
import Tasks from './tasks'; 
import Rendertimer from './rendertimer';

import { Stack, HStack, VStack, Box, Flex, Center, Input } from '@chakra-ui/react'; 

export default function page() {
  return (
    <> 
    <Flex pt="10em" pb="10em" h='100vh'>
      <Center flexGrow={1} w="50%">
        <Rendertimer/> 
      </Center> 
      <Center  flexGrow={1} w="50%" p="5em">
        <Box border="3px" w="100%" p="2em" borderColor="black"> 
          <Tasks/> 
        </Box> 
      </Center>
    </Flex> 
    </>
  )
}
