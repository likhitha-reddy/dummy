
import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
function App() {
  const [text,setText]=useState("");
  useEffect(() => 
    async () => {
      
          const response = await axios.get("http://localhost:5000/api/get");
          setText(response.data.message);
      
  }
  , );
  return (
    <div className="App">
      <header className="App-header">
       <h1>{text}</h1>
      </header>
    </div>
  );
}

export default App;
