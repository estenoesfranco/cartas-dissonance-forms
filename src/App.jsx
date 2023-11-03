import React from 'react';
import './App.css';
import Home from './componentes/Home';
import MiProvider from './componentes/context/MiProvider';

function App() {
  return (
    <MiProvider>
      <Home />
    </MiProvider>
  );
}

export default App;
