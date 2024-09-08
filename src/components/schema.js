import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  Fname: Yup.string().required("Name required"),
  Number: Yup.number("number only").required("Number required"),
});

export default validationSchema;
