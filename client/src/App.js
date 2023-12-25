
import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
function App() {
  const [text,setText]=useState("");
  const getData=
  async () => {
      
    const response = await axios.get("http://localhost:5000/api/get").then(response=>
    {setText(response.data.message),
      console.log(response.data.message)
    });

}
  
  return (
    <div >
      
        <button onclick={getData}>CLICK ME</button>
       <h1>{text}</h1>

    </div>
  );
}

export default App;
