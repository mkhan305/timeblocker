'use client'; 
import { Button } from '@chakra-ui/react'; 
import { useSession } from "next-auth/react"; 
import { useState } from "react"; 
import { HStack } from '@chakra-ui/react'; 
import axios from 'axios'; 

export default function SyncButton() { 
    // states and sessions 
    const { data : session } = useSession(); 
    const [ isStudying,  toggleIsStudying ] = useState(false); 

    // should clear the localStorage
    function stopStudying() { 
        localStorage.clear(); 

        // restore it to original state 
        toggleIsStudying(false); 
    }

    // syncs to gcal 
    async function googleSync() : Promise<void> { 
        const res = await axios.post("/api/createEvent", { 
            completedTasks : localStorage.getItem("completedTasks"), 
            startTime : localStorage.getItem("startTime")
        }); 

        if (res.status === 200) {
            alert("Event successfully created!"); 
        } 
        else {
            alert("An error occured. Try again later."); 
        }
        
        stopStudying(); 
    }

    function startStudying() : void { 
        localStorage.clear(); 
        localStorage.setItem("startTime", String(Date.now())); 
        toggleIsStudying(!isStudying); 
    }

    // if the user is not logged in disable the button 
    if (!session) { 
        return <Button isDisabled={true} colorScheme="black" variant="outline">START</Button>
    }

    // user is logged in but not studying 
    else if (session && !isStudying) { 
        return <Button onClick={startStudying} colorScheme="black" variant="outline">START</Button>
    }

    else { 
        return ( 
            <HStack border="2px" p="0.5em"> 
                <Button onClick={googleSync} colorScheme="black" variant="outline">SYNC</Button> 
                <Button onClick={stopStudying} colorScheme="black" variant="outline">STOP</Button> 
            </HStack>
        )
    }
}