import React, { useState } from "react";
import Input from "./Input";

function Home() {
  const [formValues, setFormValues] = useState({ Fname: "", Number: "" });

  return (
    <div className="">
      <div className="flex gap-4 justify-center  mt-12 items-center">
        <div className="bg-slate-600 text-white p-5 w-48">
          {formValues.Fname}
        </div>
        <div className="bg-slate-600 text-white p-5 w-48">
          {formValues.Number}
        </div>
      </div>
      <Input setFormValues={setFormValues} />
    </div>
  );
}

export default Home;
