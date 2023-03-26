import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput/FormInput";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const input = [
    {
      id: 1,
      label: "Your Name",
      name: "name",
      type: "text",
      placeholder: "Nilesh Kawar",
      pattern: "^[a-zA-Z0-9 ]{3,16}$",
      errorMsg: "Name should atleast 3-15 characters",
      required: true,
    },
    {
      id: 2,
      label: "Your Email",
      name: "email",
      type: "email",
      placeholder: "name@example.com",
      errorMsg: "It should be valid email",
      required: true,
    },
    {
      id: 3,
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "••••••••",
      errorMsg:
        "Password should be 5-15 characters, at least: 1 letter, 1 special character & 1 number",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$`,
      required: true,
    },
    {
      id: 4,
      label: "Confirm Password",
      name: "cpassword",
      type: "password",
      placeholder: "••••••••",
      errorMsg: "Password don't match!",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <section className="">
      <Breadcrumb parent={"Home"} child={"Register"} />
      <div className="my-20 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 bg-gray-50">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an Account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {input.map(input => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={handleChange}
                />
              ))}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 ">
                      I accept the{" "}
                      <Link className="hover:text-primary hover:underline">
                        {" "}
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full btn bg-primary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-secondary"
              >
                Create an Account
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline hover:text-primary"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
