import { useEffect, useState } from "react";

let lastSetCount: React.Dispatch<React.SetStateAction<number>> | null = null;
let lastNormalFn: (() => void) | null = null;

export function UseStateDemo() {
  const [count, setCount] = useState(0);
  const fn = () => {};

  // useState が返す set 関数が再レンダリング間で不変であることを検証したい
  useEffect(() => {
    console.log("Is same set function:", lastSetCount === setCount);
    lastSetCount = setCount;

    console.log("Is same normal function:", lastNormalFn === fn);
    lastNormalFn = fn;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}
