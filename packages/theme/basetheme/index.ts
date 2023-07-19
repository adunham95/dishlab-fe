import type { Theme } from 'theme-ui'

const makeTheme = <T extends Theme>(t: T) => t

const theme = makeTheme({
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    brandPrimary: {
        '50': '#fffdf7', 
        '100': '#fcf8ed', 
        '200': '#faeed4', 
        '300': '#f7e2ba', 
        '400': '#f0c589', 
        '500': '#eaa159', 
        '600': '#d48b48', 
        '700': '#b06831', 
        '800': '#8c4b20', 
        '900': '#693212', 
        '950': '#451b08'
    },
    brandSecondary: {
        '50': '#ebf4f7', 
        '100': '#daeaf0', 
        '200': '#a5c7d6', 
        '300': '#77a3bd', 
        '400': '#32658c', 
        '500': '#07305d', 
        '600': '#062952', 
        '700': '#041f45', 
        '800': '#031738', 
        '900': '#020f29', 
        '950': '#01081a'
    }
  },
  buttons: {
    primary: {
      color: 'brandPrimary.50',
      bg: 'brandPrimary.500',
    },
    secondary: {
      color: 'white',
      bg: 'secondary',
    },
  },
})

export type ExactTheme = typeof theme
export default theme