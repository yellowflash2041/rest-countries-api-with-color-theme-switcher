import { FaMoon, FaRegMoon } from "react-icons/fa";
import { useState } from "react";
export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false);
  const changeTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  return (
    <div className="toggle" onClick={changeTheme}>
      {darkMode ? (
        <div className="toggle-light">
          <FaMoon /> <p>Dark Mode</p>
        </div>
      ) : (
        <div className="toggle-dark">
          <FaRegMoon />
          <p>Dark Mode</p>
        </div>
      )}
    </div>
  );
}
