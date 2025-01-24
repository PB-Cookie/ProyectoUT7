import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { esES } from '@mui/material/locale';

const customTheme = createTheme(
  {
    palette: {
      mode: 'dark',
      primary: {
        main: '#e3bafd', //#C585EF
      },
      secondary: {
        main: '#FB3838',
        contrastText: '#000000',
      },
      text: {
        primary: '#efefef',
      },
    },
  },
  esES
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
        <App />
    </ThemeProvider>
  </StrictMode>
);
