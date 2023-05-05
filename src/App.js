import React, { useState } from "react";

function AddNumbers() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(parseInt(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(parseInt(event.target.value));
  };

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  return (
    <div>
      <h2>Add Two Numbers</h2>
      <div>
        <label>
          Number 1:
          <input type="text" value={num1} onChange={handleNum1Change} />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input type="text" value={num2} onChange={handleNum2Change} />
        </label>
      </div>
      <div>
        <button onClick={handleAddition}>Add</button>
      </div>
      <div>
        <label>Result: </label>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default AddNumbers;
