import {useState}  from 'react';

export function useCount(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return { count, incrementCount, decrementCount };
}