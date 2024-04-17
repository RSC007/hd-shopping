import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useMessages } from "../useHooks/useTostify";

export default function Login() {
  const navigate = useNavigate();
  const { user: users } = useSelector((state) => state.user);
  const { onErroMessage, onSuccessMessage } = useMessages();

  const onLogin = async () => {
    try {
      // check is exist the user
      const isExist = users?.find((item) => item?.user === values.user);
      if (isExist) {
        localStorage.setItem("user", JSON.stringify(isExist));
        onSuccessMessage(`${values.user} login successfully`);
        navigate("/app/home");
      }
    } catch (error) {
      onErroMessage(`User or Password is wrong`);
    }
  };

  const { errors, values, touched, getFieldProps, handleSubmit, ...formik } =
    useFormik({
      initialValues: {
        user: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log("values", values);
        onLogin(values);
      },
    });

  return (
    <>
      <div class="container" id="login">
        <div class="row">
          <div class="col-md-5 py-3 py-md-0" id="side1">
            <h3 class="text-center">Welcome Back!</h3>
          </div>
          <div class="col-md-7 py-3 py-md-0" id="side2">
            <h3 class="text-center">Account login</h3>
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              sequi.
            </p>
            <div class="input2 text-center">
              <input
                type="name"
                placeholder="User Name"
                {...getFieldProps("user")}
              />
              <input
                type="password"
                placeholder="Password"
                {...getFieldProps("password")}
              />
            </div>
            <button
              type="button"
              class="text-center btn btn-primary"
              id="btnlogin"
              onClick={handleSubmit}
            >
              LOG IN
            </button>
            {/* <p class="text-center">
              Forgot Password<a href="#">Click</a>
            </p> */}
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
