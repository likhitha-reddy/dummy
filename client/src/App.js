
import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
function App() {
  const [text,setText]=useState("");
  const getData=
  async () => {
      
    const response = await axios.get("http://localhost:5000/api/get");
    setText(response.data.message);

}
  useEffect(() => 
   
  {} );
  return (
    <div className="App">
      <header className="App-header">
        <button onclick={getData}>CLICK ME</button>
       <h1>{text}</h1>
      </header>
    </div>
  );
}

export default App;
