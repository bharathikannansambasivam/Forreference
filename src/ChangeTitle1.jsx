import React, { useEffect, useState } from "react";
import useConstomeHook from "./useConstomeHook";

function ChangeTitle1() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  useConstomeHook(count);
  return (
    <div>
      count:{count}
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default ChangeTitle1;
