import React from "react";
import styles from "./styles.module.scss";

import Button from "../Button/index.js";

function BlogContent({ data }) {
  return (
    <div className={styles.blogContent + " dropShadow"}>
      <Button />
    </div>
  );
}

function Sidebar() {
  return (
    <div
      className={styles.sidebar + " flex flex-col items-center hidden lg:flex"}
    >
      <div className={styles.content}>
        <BlogContent />
      </div>
    </div>
  );
}

export default Sidebar;
