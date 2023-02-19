import { useContext, useState } from "react";
import myIcon from "../assets/Logo.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img src={myIcon} alt="myIcon" />
      <p className="w-52 text-center text-gray-600">Login with your Google account</p>
      <form onSubmit={handleLogin} className="flex flex-col items-center">
        {/* <input
          className="w-52 h-8 m-3"
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-52 h-8 m-3"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        <button
          className="w-52 h-8 bg-yellow-1000 cursor-pointer border-none font-bold text-gray-800"
          type="submit"
        >
          Login
        </button>
        <div>
          {error && (
            <span className="w-3 text-red-600 mt-2">
              Wrong email or password!
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
