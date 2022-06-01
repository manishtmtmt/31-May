import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ThemeContext } from "../Context/ThemeContext";
import Whishlist from "./Whishlist";

const Navbar = () => {
  const { isAuthorized, login, logout } = useContext(AuthContext);
  const { isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuthorized) logout();
          else login("R", "Z");
        }}
      >
        {isAuthorized ? "Logout" : "Login"}
      </button>
      <button onClick={toggleTheme}>{`Make ${
        isLight ? "Dark" : "Light"
      }`}</button>
      <Whishlist />
    </div>
  );
};

export default Navbar;
