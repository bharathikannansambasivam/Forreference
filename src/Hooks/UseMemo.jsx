import React, { useMemo, useState } from "react";

function UseMemo() {
  const [theme, setTheme] = useState(true);
  const [number, setNumber] = useState(0);

  const slow = () => {
    console.log("running slow");

    let i = 0;
    while (i < 900000000) i++;
  };
  const doubleNum = useMemo(() => slow(), [number]);

  const handleAddition = () => {
    console.log("addtion");
    setNumber(number + 1);
  };
  return (
    <div>
      <h1 style={{ background: theme ? "red" : "green" }}>ThemeColor</h1>
      <button onClick={() => setTheme(!theme)}>Change Color</button>
      <h1>{doubleNum}</h1>
      <h2>{number}</h2>
      <button onClick={handleAddition}>Add</button>
    </div>
  );
}

export default UseMemo;
