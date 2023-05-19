import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "store/slices/authSlice";
/*
{
    "nickName": "Nickname",
      "firstName": "Name",
      "lastName": "LastName",
      "password": "12345",
      "email" : "mail@mail.com",
      "userRole": "Creator"
  }
  */

const initialState = {
  nickName: "",
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  userRole: "",
};



function RegisterForm(props) {
  const {isLoading, error} = useSelector(state=>state.auth)
  const dispatch = useDispatch()
  const submitHandler = (values, formikBag) => {
    dispatch(register(values))
  }
  return (
    <>
    {isLoading && <div>Registering Now!</div>}
    {error && <div>{error.message}</div>}
    <Formik initialValues={initialState} onSubmit={submitHandler}>
      <Form>
        <Field name="nickName" placeholder="nickName" />
        <Field name="firstName" placeholder="firstName" />
        <Field name="lastName" placeholder="lastName" />
        <Field type="password" name="password" placeholder="password" />
        <Field type="email" name="email" placeholder="email" />
        <Field name="userRole" placeholder="userRole" />
        <button type="submit">Register</button>
      </Form>
    </Formik></>
  );
}

export default RegisterForm;
