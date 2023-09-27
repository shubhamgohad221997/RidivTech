import React from "react";
import styles from "./Header.module.css";
import { useTheme } from "../../Context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const buttonText = theme === "light" ? "Dark Theme" : "Light Theme";
  return (
    <div className={`${styles.Box1} ${theme}`}>
      <img
        className={styles.Image}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GSppVCEQZBPkfWaJMxToB6D5kydsg_3VMYFQHDdR4HMLvALFFpaXhwdXd43stc_sruE&usqp=CAU"
        alt="logo"
      />
      <h1>Theming App</h1>

      <button className={`${styles.Button} ${theme}`} onClick={toggleTheme}>
        {buttonText}
      </button>
    </div>
  );
}

export default Header;
