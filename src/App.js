import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignIn from './pages/SignIn';
import Home from './pages/Home';
import theme from './theme'

function App() {
   return (    
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<h1>Not found 404</h1> } />

          </Routes>    
        </BrowserRouter>    
      </ThemeProvider> 
   
  );
}

export default App;
