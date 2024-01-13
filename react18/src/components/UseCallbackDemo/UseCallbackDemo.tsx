import { useCallback, useState } from "react";
import { Button } from "./Button";

const useCount = () => {
  const [count, setCount] = useState(0);

  return [count, setCount] as const;
};

export const Counter = () => {
  const [count, setCount] = useCount();
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Here is `useCallback` Demo</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Button onClick={handleClick}></Button>
    </div>
  );
};
