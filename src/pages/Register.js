import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myIcon from "../assets/Logo.svg";
import { Alert } from "../components/Alert";
import { useAuth } from "../context/authContext";

function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("Invalid Mail");
          break;
        case "auth/weak-password":
          setError("Invalid Password");
          break;
        case "auth/email-already-in-use":
          setError("e-mail is already in use");
          break;
        default:
          setError("Incorrect email or password");
          break;
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center bg-white border-gray-100 p-2">
      <div className="flex flex-col items-center justify-center">
        <img src={myIcon} alt="myIcon" />
        <h2 className="w-52 text-center text-lg font-bold text-gray-600">
          Create an account
        </h2>
        {error && <Alert message={error} />}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          name="email"
          type={"email"}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full border-2 border-gray-100 rounded-xl p-1 bg-transparent hover:bg-yellow-100"
          placeholder="Enter your email"
        />
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <input
          name="password"
          type={"password"}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="w-full border-2 border-gray-100 rounded-xl p-1 bg-transparent hover:bg-yellow-100"
          placeholder="Enter your password"
        />
        <button className="w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-1 bg-yellow-1000 rounded-xl text-gray-800 font-bold text-sm hover:bg-yellow-400">
          Register
        </button>
      </form>
      <p className="font-medium text-xs mt-2">
        Already have an Account?{" "}
        <Link to="/login" className="text-blue-700 hover:text-blue-900 text-sm">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
