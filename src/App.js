import React from 'react';
import { useRenderedCounter } from './logic-render-hook.js';
import './style.css';

export default function App() {
  const [Counter, count] = useRenderedCounter();
  return (
    <div>
      <Counter />
      {count}
    </div>
  );
}
