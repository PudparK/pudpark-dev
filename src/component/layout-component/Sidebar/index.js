import React from "react";
import styles from "./styles.module.scss";

function BlogContent({ data }) {
  return (
    <div className={styles.blogContent + " dropShadow"}>
      <img
        className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto mb-1"
        src={data.profile_image}
        alt="PudparK Paul Barron Profile"
      />
      <h3 className="text-2xl text-center">{data.username}</h3>
    </div>
  );
}

function Sidebar({ data }) {
  return (
    <div
      className={styles.sidebar + " flex flex-col items-center hidden lg:flex"}
    >
      <div className={styles.content}>
        <BlogContent data={data} />
      </div>
    </div>
  );
}

export default Sidebar;
