'use client'; 
import { HamburgerIcon } from '@chakra-ui/icons';
import { Menu, MenuList, MenuButton, MenuItem } from '@chakra-ui/react'; 

export default function HamburgerMenu() { 
    return (
        <Menu> 
            <MenuButton><HamburgerIcon boxSize={6}/></MenuButton>
            <MenuList> 
                <MenuItem as='a' target="_blank" href='/about'>About</MenuItem>
                <MenuItem as='a' target="_blank" href='/howto'>How To</MenuItem>
            </MenuList> 
        </Menu> 
    ) 
}

/* Implement links to the actual About and How To Pages 
Implement About and How To Pages */