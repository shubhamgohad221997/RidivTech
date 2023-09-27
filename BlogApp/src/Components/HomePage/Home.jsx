import React from "react";
import { Link } from "react-router-dom";
import BlogData from "../../blogdata.json";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.Box1}>
        <h1 style={{ color: "green", fontSize: "30px" }}>Blogs</h1>
        <div className={styles.Box2}>
          {BlogData.map((blog) => (
            <Link to={`/blog/${blog.id}`}>
              <div key={blog.id} className={styles.Box3}>
                <img src={blog.Image} className={styles.Image} />
                <p className={styles.Name}>{blog.BlogName}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
