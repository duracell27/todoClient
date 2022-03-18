import React from "react";
import "./AuthPage.scss";

import { Routes, Route } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default function AuthPage() {
  return (
    
      <React.Fragment> 
        <div className="container">
          <div className="auth-page">
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/registr" element={<RegisterForm />} />
            </Routes>
          </div>
        </div>
      </React.Fragment>
  );
}
