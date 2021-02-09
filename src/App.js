import React from 'react'
import Pubg from './image/img.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img  src={Pubg} className="App-logo" alt="logo" />
    
        <div>
        <button onClick={()=>alert('and get chicken')}>Play Pubg</button>
        </div>
      
       
       
      </header>
    </div>
  );
}

export default App;
