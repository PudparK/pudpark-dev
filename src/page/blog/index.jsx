import React from "react";
import styles from "./styles.module.scss";

// Components
import PageTemplate from "component/layout-component/PageTemplate";
import PostContainer from "component/layout-component/PostContainer";
// import Sidebar from "component/layout-component/Sidebar";
import SocialStack from "component/layout-component/SocialStack";

fetch("https://www.pudpark.dev/.netlify/functions/api/posts")
  .then((res) => res.json())
  .then((data) => console.log("data", data));

function Blog() {
  return (
    <PageTemplate title="Blog">
      <PostContainer className={styles.postContainer} data={null} />
      <SocialStack />
    </PageTemplate>
  );
}

export default Blog;
