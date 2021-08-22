import React, {useState, useEffect} from "react";

import "./App.css";
// import InputField from "./components/day03-challenge/inputFieldDemo/inputField";
// import TenLittleMonkeys from "./components/day03-challenge/TenLittleMonkeys";
import Calculator from "./components/day03-challenge/useStateCalculator";

function App() {
  const welcomeName = "Paul!!!"
  return (    
    <div className="App">
      <Calculator/> 
      {/* <InputField/> */}
      {/* <h1><TenLittleMonkeys/></h1> */}
    </div>
  );
}

export default App;
