import { Heading, Center, Text, Flex, Box, VStack, ListItem, OrderedList } from '@chakra-ui/react'; 

export default function page() { 
    return ( 

        <Flex pt="10em" pb="10em" h="100vh" align="center">
            <VStack px="35%"> 
            <Heading fontWeight="bold">How To Use TIMEBLOCKER</Heading>  

            Quickstart
            <OrderedList> 
<ListItem>Log In to Google Calendar in the top left.</ListItem>
<ListItem>Choose Timer.</ListItem>
<ListItem> Enter Tasks for current Worksession.</ListItem> 
<ListItem>Start Worksession by clicking Start in the top left.</ListItem>
<ListItem>Begin Timer.</ListItem>
<ListItem>Complete Worksession.</ListItem>
<ListItem>Press Sync in the top left to end Worksession and upload to Google Calendar.</ListItem>
<Center>
    <Text>OR</Text>
</Center>
<ListItem>Press Stop to end Worksession without uploading to Google Calendar.</ListItem>
</OrderedList> 


            </VStack> 

        </Flex>
    )
}