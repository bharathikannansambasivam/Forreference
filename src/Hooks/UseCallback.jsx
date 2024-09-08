import React, { useCallback, useState } from "react";
import Button from "../Button";
import Title from "../Title";

function UseCallback() {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(1500);

  const handleAge = useCallback(() => {
    setAge(age + 2);
  }, [age]);

  const handleSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <h1>age;{age}</h1>
      <h1>Salary;{salary}</h1>

      <Button handleClick={handleAge}>Increment age</Button>
      <Button handleClick={handleSalary}> Increment salary</Button>
    </div>
  );
}

export default UseCallback;
