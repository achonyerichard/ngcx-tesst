import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&:focus": {
            borderColor: "red",
            boxShadow: "0 0 0 2px rgba(0, 0, 255, 0.5)",
          },
        },
        
      },
    },
    
  },
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App /> 
      </ThemeProvider>
     
      </BrowserRouter>
   
  </React.StrictMode>,
)
