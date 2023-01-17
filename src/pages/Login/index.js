import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="formContainer">
      <div className="formOverlay">
        <div className="formWrapper">
          <span className="logo">Orias Chat</span>
          <span className="title">Login</span>
          <form>
            <input type={"email"} placeholder={"Input Email"} />
            <input type={"password"} placeholder={"Input Password"} />
            <button>Sign in</button>
          </form>
          <p>
            You don't have an account? <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
