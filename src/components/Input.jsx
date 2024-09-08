import { useFormik } from "formik";
import React, { useEffect } from "react";

import validationSchema from "./schema";

function Input({ setFormValues }) {
  const formik = useFormik({
    initialValues: {
      Fname: "",
      Number: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });
  useEffect(() => {
    setFormValues(formik.values);
  }, [setFormValues, formik.values]);
  return (
    <div>
      <div>{formik.values.Fname}</div>
      <div>{formik.values.Number}</div>

      <form
        className="bg-red-50 border  p-5 flex flex-col gap-5 w-52 justify-center items-center "
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          className="border "
          type="text"
          name="Fname"
          value={formik.values.Fname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.Fname && formik.errors.Fname && (
          <div className="text-red-500">{formik.errors.Fname}</div>
        )}
        <label htmlFor="name">Number</label>

        <input
          className="border "
          type="text"
          name="Number"
          value={formik.values.Number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.Number && formik.touched.Number && (
          <div className="text-red-500">{formik.errors.Number}</div>
        )}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Input;
