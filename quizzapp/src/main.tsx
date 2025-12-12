import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import "./index.css"
import  '@fontsource/montserrat'
import theme from './theme.tsx'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>,
)   
