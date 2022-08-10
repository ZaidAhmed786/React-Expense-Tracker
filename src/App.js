import React from 'react';
import './App.css';
import Home from './Home';
import {TransProvider} from './transContext'

function App() {
  return (
  
    <TransProvider>  
    <Home />
    </TransProvider>
  
  )
  
}

export default App;
