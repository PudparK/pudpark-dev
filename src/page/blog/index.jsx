import React, { useState, useEffect } from "react";

import styles from "./styles.module.scss";

// Components
import Loading from "component/Loading";
import PageTemplate from "component/PageTemplate";
import PostContainer from "component/PostContainer";
import SocialStack from "component/SocialStack";
import Sidebar from "component/Sidebar";

//Data
import fetchData from "api-queries/api-queries";

function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData("/.netlify/functions/api/devto").then((data) => setPosts(data));
    }, 2500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  console.log("posts:", posts);

  return (
    <>
      {!posts ? (
        <Loading />
      ) : (
        <PageTemplate title="Blog">
          <Sidebar />
          <PostContainer posts={posts} />
          <SocialStack />
        </PageTemplate>
      )}
    </>
  );
}

export default Blog;
