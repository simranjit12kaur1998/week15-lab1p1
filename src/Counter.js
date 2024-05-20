// src/Counter.js
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      {/* Step 4: Add an input field and update state based on input value */}
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}