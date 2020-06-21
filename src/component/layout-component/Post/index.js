import React from "react";
import styles from "./styles.module.scss";

function Post({ data }) {
  return <div>{data.body_markdown}</div>;
}

export default Post;
