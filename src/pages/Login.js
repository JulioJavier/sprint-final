import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";
import { useAuth } from "../context/authContext";
import myIcon from "../assets/Logo.svg";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError("We sent you an email. Check your inbox");
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
          <p className="w-52 text-center text-sm text-gray-600">
            Login or create an account with your email to start ordering
          </p>
          {error && <Alert message={error} />}
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="w-full border-2 border-gray-100 rounded-xl p-1 bg-transparent hover:bg-yellow-100"
            placeholder="Enter your email"
          />
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="w-full border-2 border-gray-100 rounded-xl p-1 bg-transparent hover:bg-yellow-100"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-1 bg-yellow-1000 rounded-xl text-gray-800 font-bold text-sm hover:bg-yellow-400"
          >
            Login
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#!"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </a>
        </form>
        <button
          onClick={handleGoogleSignin}
          className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-1  rounded-xl text-gray-700 font-semibold text-sm border-2 border-gray-100 hover:bg-blue-100 mt-2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
              fill="#EA4335"
            />
            <path
              d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
              fill="#34A853"
            />
            <path
              d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
              fill="#4A90E2"
            />
            <path
              d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
              fill="#FBBC05"
            />
          </svg>
          Sign in with Google
        </button>
      <p className="my-4 text-sm flex justify-between px-3 gap-1">
        Don't have an account?
        <Link to="/register" className="text-blue-700 hover:text-blue-900">
          Register
        </Link>
      </p>
      </div>
  );
}

export default Login;
