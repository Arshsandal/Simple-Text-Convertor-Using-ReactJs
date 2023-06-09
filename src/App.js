import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');     
      document.body.style.backgroundColor = '#042743' 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white' 
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <div className="container">
    <Form heading='Enter Your Text Here' mode={mode} />
    </div>
    
    
    </>

  );
}

export default App;
