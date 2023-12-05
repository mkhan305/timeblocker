'use client'; 
import React from 'react'; 
import { IconButton, useColorMode } from '@chakra-ui/react'; 
import { MoonIcon, SunIcon } from '@chakra-ui/icons'; 
import { useColorModeValue, Button } from '@chakra-ui/react'; 

const icons : {[key: string]: React.JSX.Element}= {"light": <SunIcon />, "dark": <MoonIcon />}; 

export function SwitchModeButton() { 

    const [mode, setMode] = React.useState("light"); 

    const { colorMode, toggleColorMode } = useColorMode();  
    
    function toggleMode() { 
        if (mode == "light") { 
            setMode("dark")
        } else { 
            setMode("light")
        }
    }

    return ( 
        <div> 
            <IconButton size="lg" onClick={toggleColorMode} variant="ghost" aria-label="light mode" icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}></IconButton> 
        </div>
    )
}

export function ThemeButton({children} : {
    children: React.ReactNode
  }) { 
    const bg = useColorModeValue("black", "white"); 
    const color = useColorModeValue("white", "black"); 

    return <Button bg={bg} color={color} variant="solid">{children}</Button>
}