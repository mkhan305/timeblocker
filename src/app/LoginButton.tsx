'use client'; 
import { useSession, signIn, signOut } from "next-auth/react"; 
import { ThemeButton } from "./ThemeButton"; 

export default function LoginButton() { 
    const { data : session } = useSession(); 
    
    if (session) { 
        return ( 
            <ThemeButton onClick={() => signOut()}>LOG OUT</ThemeButton>
        )
    }

    return ( 
        <ThemeButton onClick={() => signIn()}>LOG IN</ThemeButton>
    )
}