import { JSX } from 'preact';
import { useState, useCallback } from 'preact/hooks';

const InteractiveCounter = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const increaseCount = useCallback((): void => {
    setCount(count => count + 1);
  }, [setCount]);

  const decreaseCount = useCallback((): void => {
    setCount(count => count - 1);
  }, [setCount]);

  return (
    <div class="flex items-center justify-center bg-red-300 p-4 mb-8">
      <button class="p-2 text-xl" onClick={increaseCount}>+</button>
      <p class="mx-4 text-2xl">{count}</p>
      <button class="p-2 text-xl" onClick={decreaseCount}>-</button>
    </div>
  );
};

export default InteractiveCounter;
