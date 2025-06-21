import * as Yup from "yup"
export const Appoint = Yup.object({
    firstname : Yup.string().required("First Name Is Required"),
    lastname : Yup.string().required("Last Name Is Required"),
    phonenumber : Yup.string()
  .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
  .required("Phone number is required")
,
    email : Yup.string().email("It's Not Email").required(" Email Is Required"),
    date : Yup.string().required("Date Is Required"),
    servicetype : Yup.string().required("Service Type Is Required"),
    message: Yup.string().required("Message is required")

}) 