import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { registerfunction } from "../services/Apis";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/mix.css";

const Register = () => {
  const [passhow, setPassShow] = useState(false);

  const [inputdata, setInputdata] = useState({
    fname: "",
    email: "",
    password: "",
    file: "", 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, password,file  } = inputdata;

    if (fname === "") {
      toast.error("Enter Your Name");
    } else if (email === "") {
      toast.error("Enter Your Email");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email");
    } else if (password === "") {
      toast.error("Enter Your Password");
    } else if (file===""){
      toast.error("select a image");
    }
    else if (password.length < 6) {
      toast.error("Password length must be at least 6 characters");
    } else {
      try {
        const response = await registerfunction(inputdata);

        if (response.status === 200) {
          setInputdata({ fname: "", email: "", password: "", file: "" });
          navigate("/");
        } else {
          if (
            response.response &&
            response.response.data &&
            response.response.data.error
          ) {
            toast.error(response.response.data.error);
          } else {
            toast.error("An error occurred during registration");
          }
        }
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error("An unexpected error occurred during registration");
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, molestias!
            </p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                name="fname"
                id=""
                onChange={handleChange}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={handleChange}
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passhow ? "password" : "text"}
                  name="password"
                  id=""
                  onChange={handleChange}
                  placeholder="Enter Your password"
                />
                <div className="showpass" onClick={() => setPassShow(!passhow)}>
                  {!passhow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <div className="form_input" enctype="multipart/form-data">
              <label htmlFor="file">Image</label>
              <input
                type="file"
                name="file"
                id=""
                onChange={handleChange}
              
                placeholder="Select your file"
              />
            </div>
            <button className="btn" onClick={handleSubmit}>
              Sign Up
            </button>
            <p>
              Already have an account ? <NavLink to="/">Login</NavLink>{" "}
            </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Register;
