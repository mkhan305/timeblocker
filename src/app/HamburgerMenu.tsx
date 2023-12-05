'use client'; 
import { HamburgerIcon } from '@chakra-ui/icons';
import { Menu, MenuList, MenuButton, MenuItem } from '@chakra-ui/react'; 

export default function HamburgerMenu() { 
    return (
        <Menu> 
            <MenuButton><HamburgerIcon boxSize={6}/></MenuButton>
            <MenuList> 
                <MenuItem>About</MenuItem>
                <MenuItem>How To</MenuItem>
            </MenuList> 
        </Menu> 
    ) 
}

/* Implement links to the actual About and How To Pages 
Implement About and How To Pages */