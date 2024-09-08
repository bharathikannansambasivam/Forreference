import { useEffect, useState } from "react";

function useConstomeHook() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return [count, handleClick];
}

export default useConstomeHook;
