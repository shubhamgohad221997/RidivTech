import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={`${styles.Box1}`}>
      <div className={styles.Box2}>
        <Link to={"/"}>Home</Link>
        <Link to="/aboutPage">AboutUs</Link>
      </div>
    </div>
  );
}

export default Navbar;
