'use client'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const links = [
    {"name": "ABOUT", "path": "/about"},
    {"name": "HOW TO", "path": "/howto"},
];

export function Links() { 
    const path = usePathname();
    return ( 
        links.map(link => ( 
            <Link key={link["path"]} 
                href={link["path"]} 
                className={`link ${path == link["path"] ? "active" : ""}`}
                        >{link["name"]}
            </Link>
        ))
    )
}