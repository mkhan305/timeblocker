import { extendTheme, type ThemeConfig } from "@chakra-ui/react"; 
import '@fontsource/inter'; 

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({ 
    styles: { 
        global: {
            "#root": { 
                minHeight:"100vh"
            }
        } 
    },
    fonts: { 
        heading: `'inter'`
    }, 
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    }, 
    config
})

export default theme; 