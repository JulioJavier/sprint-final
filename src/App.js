import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Search from "./pages/Search";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <div className="flex h-screen w-screen">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/order" element={<Orders />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
