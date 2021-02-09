import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import SignIn from './pages/SignIn';
import Home from './pages/Home';
import theme from './theme'

function App() {
  const url = window.location.href

  return (
   <ThemeProvider theme={theme}>
     {
       url === "http://localhost:3000/" ? <Home /> : <SignIn />
     }
        
        
   </ThemeProvider> 
   
  );
}

export default App;
