import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import LoginForm from "./components/LoginForm/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const { login, logout, token, isReady, userId } = useAuth();
  const isLogin = !!token;

  return (
    <AuthContext.Provider
      value={{ login, logout, token, isReady, userId, isLogin }}
    >
      <div className="App">
        <BrowserRouter>
          <Navbar />
          {isLogin ? (
            <Routes>
              <Route path="/login" element={<Navigate to='/' />} />
              <Route path="/" exact element={<MainPage />} />
            </Routes>
          ) : (
            <div className="container">
              <div className="auth-page">
                <Routes>
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/registr" element={<RegisterForm />} />
                </Routes>
              </div>
            </div>
          )}
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
