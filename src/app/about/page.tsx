import { Heading, Center, Text, Flex, Box, VStack } from '@chakra-ui/react'; 

export default function page() { 
    return ( 

        <Flex pt="10em" pb="10em" h="100vh" align="center">
            <VStack px="35%"> 
            <Heading fontWeight="bold">About</Heading>  
            <Text fontWeight="semibold">

            This is TIMEBLOCKER. Created by three Harvard College freshmen - Mohammad Khan, Ethan Dhadly, and Andrew Yu - for CS50's final project. 

            Timeblocker is a google calendar integrated time tracking site that blocks your time into chunks. Tell us your tasks, and then 
            choose a timer, stopwatch, and Pomodoro. We will automatically record what you did and how long it took when you end your session. 
            </Text> 
            </VStack> 

        </Flex>
    )
}