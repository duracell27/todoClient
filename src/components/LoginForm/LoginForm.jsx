import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const {login} = useContext(AuthContext)

  const changeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const loginHandler = async () => {
    try {
      await axios
        .post(
          "api/auth/login",
          { ...form },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          login(response.data.token, response.data.userId)
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <React.Fragment>
      <h3>Log In</h3>
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
              onClick={loginHandler}
              className="wawes-effect wawes-light btn green"
            >
              Log In
            </button>
            <Link to="/registr" className="btn-outline btn-reg">
              don`t have an account?
            </Link>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
