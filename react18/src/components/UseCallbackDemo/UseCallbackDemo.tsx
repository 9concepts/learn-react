import { useCallback, useState } from "react";
import { Button } from "./Button";

export const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log(count)
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
