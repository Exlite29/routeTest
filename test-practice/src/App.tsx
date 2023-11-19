import React from "react";
import "./App.scss";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
// const ForgotPassword = lazy(() => import("../pages/ForgotPassword/ForgotPassword"))

const App: React.FC = () => {
  return (
    <>
      <nav className="flex fixed top-0 left-0 p-4 bg-gray-800 text-white">
        <ul className="flex flex-col list-none space-y-2 m-0">
          <li>
            <Link to="/home">
              <p className="cursor-pointer m-0">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p className="cursor-pointer m-0">About</p>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <p className="cursor-pointer m-0">Contact</p>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <p className="cursor-pointer m-0">Profile</p>
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home children />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/*" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
