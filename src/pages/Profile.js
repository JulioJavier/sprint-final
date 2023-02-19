import React from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/authContext";

const Profile = () => {
  const { logout, user } = useAuth();

  // console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="flex flex-col w-1/2 items-center justify-center">
        {!user.photoURL ? (
          <div className="w-28 h-28">
            <svg
              className="w-full h-full fill-slate-300 object-cover"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="inherit"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <img className="rounded-full" src={user.photoURL} alt="photoUser" />
        )}
        {!user.displayName ? (
          <h3 className="text-xl font-bold text-center mb-10">{user.email}</h3>
        ) : (
          <h3 className="text-xl font-bold text-center mb-10">
            {user.displayName}
          </h3>
        )}

        <button
          onClick={handleLogout}
          className="w-44 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-1 bg-red-600 rounded-xl text-white font-bold text-sm hover:bg-red-800"
        >
          Logout
        </button>
        <Navbar />
      </div>
    </div>
  );
};

export default Profile;
