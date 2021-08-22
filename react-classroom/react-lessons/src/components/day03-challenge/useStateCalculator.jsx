import React, { useState } from "react";

const Calculator = (props) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);

  function handleOnChange1(e) {
    setNum1(e.target.value);
    console.log(e.target.value);
  }
  function handleOnChange2(e) {
    setNum2(e.target.value);
    console.log(e.target.value);
  }
  function calculateTotal(e) {
    setTotal(parseInt(num1) + parseInt(num2));
    console.log(e.target.value);
  }

  return (
    <div>
      <input type="number" value={num1} onChange={handleOnChange1}></input>
      <input type="number" value={num2} onChange={handleOnChange2}></input>
      <button onClick={calculateTotal}>Calculate total</button>
      <h2>{total}</h2> 
    </div>
  );
};

export default Calculator;
