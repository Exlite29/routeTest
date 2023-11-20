import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import { Navigation } from "./pages/Navigation";

// const ForgotPassword = lazy(() => import("../pages/ForgotPassword/ForgotPassword"))

const App: React.FC = () => {
  return (
    <>
      <Navigation />
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
