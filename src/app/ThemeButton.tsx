'use client'; 
import React from 'react'; 
import { IconButton, useColorMode } from '@chakra-ui/react'; 
import { MoonIcon, SunIcon } from '@chakra-ui/icons'; 
import { useColorModeValue, Button } from '@chakra-ui/react'; 

const icons : {[key: string]: React.JSX.Element}= {"light": <SunIcon />, "dark": <MoonIcon />}; 

export function SwitchModeButton() { 


    const { colorMode, toggleColorMode } = useColorMode();  

    return ( 
        <div> 
            <IconButton size="lg" onClick={toggleColorMode} variant="ghost" aria-label="light mode" icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}></IconButton> 
        </div>
    )
}

export function ThemeButton({ children, onClick } : { children: React.ReactNode, onClick: () => void}) { 
    const bg = useColorModeValue("black", "white"); 
    const color = useColorModeValue("white", "black"); 

    return <Button onClick={onClick} bg={bg} color={color} variant="solid">{children}</Button>
}