import React, { useState, useEffect, useCallback } from 'react';

export const useRenderedCounter = () => {
  const [count, setCount] = useState(0);
  const addCount = () => setCount((c) => c + 1);
  const minusCount = () => setCount((c) => c + 1);
  const Counter = useCallback(
    () => (
      <div>
        <button onClick={addCount}>+</button>
        {count}
        <button onClick={minusCount}>-</button>
      </div>
    ),
    [count]
  );
  return [Counter, count, setCount];
};
