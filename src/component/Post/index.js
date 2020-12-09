import React from "react";
import styles from "./styles.module.scss";

const Post = ({ children }) => {
  return <div className={styles.Post}>{children}</div>;
};

export default Post;
