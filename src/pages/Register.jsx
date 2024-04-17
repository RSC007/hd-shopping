import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axiosCall from "../axiosInterpreter";
import { useMessages } from "../useHooks/useTostify";

export default function Register() {
  const navigate = useNavigate();
  const { onErroMessage, onSuccessMessage } = useMessages();

  const onRegisterUser = async (values) => {
    try {
      const response = await axiosCall.post("/users", values);
      localStorage.setItem("user", JSON.stringify(values));
      onSuccessMessage(`${values?.user} sign up successfully`);
      navigate("/app/home");
    } catch (error) {
      // something went wrong
      onErroMessage(error?.message || "Something went wrong");
    }
  };

  const { errors, values, touched, getFieldProps, handleSubmit, ...formik } =
    useFormik({
      initialValues: {
        name: "",
        user: "",
        phone: "",
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        onRegisterUser(values);
      },
    });

  return (
    <>
      <div class="container" id="login">
        <div class="row">
          <div class="col-md-5 py-3 py-md-0" id="side1">
            <h3 class="text-center">Register</h3>
          </div>
          <div class="col-md-7 py-3 py-md-0" id="side2">
            <h3 class="text-center">Create Account</h3>
            <div class="input2 text-center">
              <input
                type="name"
                placeholder="Name"
                {...getFieldProps("name")}
              />
              <input
                type="name"
                placeholder="User Name"
                {...getFieldProps("user")}
              />
              <input
                type="number"
                placeholder="Phone"
                {...getFieldProps("number")}
              />
              <input
                type="email"
                placeholder="Email"
                {...getFieldProps("email")}
              />
              <input
                type="password"
                placeholder="Password"
                {...getFieldProps("password")}
              />
            </div>
            <button
              class="text-center btn btn-primary"
              id="btnlogin"
              type="button"
              onClick={handleSubmit}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      <div
        class="container"
        id="newslater"
        style={{
          marginTop: "100px",
        }}
      >
        <h3 class="text-center">
          Subscribe To The Electronic Shop For Letest Upload.
        </h3>
        <div class="input text-center">
          <input type="text" placeholder="Enter Your Email.." />
          <button id="subscribe">SUBSCRIBE</button>
        </div>
      </div>
    </>
  );
}
