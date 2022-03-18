import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const registerHandler = async () => {
    try {
      await axios
        .post(
          "api/auth/registration",
          { ...form },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          console.log(response);
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <React.Fragment>
      <h3>Sign Up</h3>
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <div className="form-login">
          <div className="row">
            <div className="input-field col s12">
              <input
                type="email"
                name="email"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input
                type="password"
                name="password"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <button
              onClick={registerHandler}
              className="wawes-effect wawes-light btn green"
            >
              Sign up
            </button>
            <Link to="/login" className="btn-outline btn-reg">
              allready have an account?
            </Link>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
