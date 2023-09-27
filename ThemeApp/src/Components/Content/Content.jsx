import React from "react";
import data from "../../blogdata.json";
import styles from "./Content.module.css";
import { useTheme } from "../../Context/ThemeContext";

const Content = () => {
  const { theme } = useTheme();
  return (
    <div className={` ${styles.Main }, ${theme}`}>
      <h1 style={{ textAlign: "center", color: "tomato" }}>Content Page</h1>
      <div className={styles.Box1}>
        {data.map((el) => (
          <div key={el.id} className={styles.Box2}>
            <div>
              <img src={el.Image} className={styles.Image} alt={el.BlogName} />
            </div>
            <div>
              <p className={styles.title}>Blog Name: {el.BlogName}</p>
              <p>Author Name: {el.AuthorName}</p>
              <p> Blog Details:- {el.AuthorDetails}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
