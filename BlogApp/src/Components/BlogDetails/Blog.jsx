import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlogData from "../../blogdata.json";
import styles from "./blog.module.css";

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const post = BlogData.find((post) => post.id === parseInt(id));
    setData(post);
  }, [id]);

  return (
    <div className={styles.box1}>
      <Link to="/">
        <button className={styles.Button1}>Go Back</button>
      </Link>
      <br />
      <div className={styles.box2}>
        <div>
          <img
            className={styles.Image}
            src={data.Image}
            alt={data.AuthorName}
          />
        </div>
        <div>
          <h1 className={styles.BlogName}>{data.BlogName}</h1>
          <p className={styles.blogDetails}>{data.BlogDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
