
import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
function App() {
  const [text,setText]=useState("");
  const getData=
  async () => {
      
    const response = await axios.get("/api/get")
      console.log(response)
  

}
  
  return (
    <div >
      
        <button onclick={getData}>CLICK ME</button>
       <h1>{text}</h1>

    </div>
  );
}

export default App;
