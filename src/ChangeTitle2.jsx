import React, { useEffect, useState } from "react";
import useConstomeHook from "./useConstomeHook";

function ChangeTitle2() {
  const [count, handleClick] = useConstomeHook();

  useConstomeHook(count);

  return (
    <div>
      count:{count}
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default ChangeTitle2;
