import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="formContainer">
      <div className="formOverlay">
        <div className="formWrapper">
          <span className="logo">Orias Chat</span>
          <span className="title">Register</span>
          <form>
            <input type={"text"} placeholder={"Input your name"} />
            <input type={"email"} placeholder={"Input Email"} />
            <input type={"password"} placeholder={"Input Password"} />
            <input style={{ display: "none" }} type={"file"} id="file" />
            <label htmlFor="file">
              <img src="https://img.icons8.com/color/144/null/image-file.png" />
              <span>Add an avatar</span>
            </label>
            <button>Sign up</button>
          </form>
          <p>
            You do have an accoung? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
