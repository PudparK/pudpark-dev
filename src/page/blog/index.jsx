import React from "react";
// import styles from "./styles.module.scss";

// Components
import PageTemplate from "component/layout-component/PageTemplate";
// import PostContainer from "component/layout-component/PostContainer";
import SocialStack from "component/layout-component/SocialStack";

//Data
import fetchData from "api-queries/api-queries";

let posts = fetchData("/.netlify/functions/api/posts"); //here
console.log("posts:", posts);

function Blog() {
  return (
    <PageTemplate title="Blog">
      <SocialStack />
    </PageTemplate>
  );
}

export default Blog;
