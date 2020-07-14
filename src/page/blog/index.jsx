import React, { useState, useEffect } from "react";

import styles from "./styles.module.scss";

// Components
import PageTemplate from "component/layout-component/PageTemplate";
import PostContainer from "component/layout-component/PostContainer";
import SocialStack from "component/layout-component/SocialStack";
import Sidebar from "component/layout-component/Sidebar";

//Data
import fetchData from "api-queries/api-queries";

function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchData("/.netlify/functions/api/devto").then((data) => setPosts(data));
  }, []);
  console.log("posts:", posts);

  if (posts === null) {
    return (
      <div className="flex min-h-full justify-center items-center relative">
        <h1 className={styles.bigCursor + "font-bold lg:text-4xl"}>
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <PageTemplate title="Blog">
      <Sidebar />
      <PostContainer posts={posts} />
      <SocialStack />
    </PageTemplate>
  );
}

export default Blog;
