// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  cssVariables: {
    nativeColor: true,
    cssVarPrefix: 'modern-color-spaces',
  },
  palette: {
    primary: {
      main: '#7fa9cfff',
      dark: '#0066CC',
    },
    secondary: {
      main: '#7fa9cfff'
    }
  }
});

export default theme;