import React, { useState, useEffect } from "react";

// Components
import PageTemplate from "component/layout-component/PageTemplate";
import PostContainer from "component/layout-component/PostContainer";
import SocialStack from "component/layout-component/SocialStack";

//Data
import fetchData from "api-queries/api-queries";

function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchData("/.netlify/functions/api/posts").then((data) => setPosts(data));
  }, []);
  console.log("posts:", posts);

  if (posts === null) {
    return <p>Loading...</p>;
  }

  return (
    <PageTemplate title="Blog">
      {/* <PostContainer posts={posts} /> */}
      <SocialStack />
    </PageTemplate>
  );
}

export default Blog;
