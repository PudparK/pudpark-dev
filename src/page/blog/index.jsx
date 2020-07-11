import React from "react";
// import styles from "./styles.module.scss";

//Data
import fetchData from "api-queries/api-queries";

let posts = fetchData("/.netlify/functions/api/posts"); //here
console.log("posts:", posts);

// // Components
// import PageTemplate from "component/layout-component/PageTemplate";
// // import PostContainer from "component/layout-component/PostContainer";
// // import Sidebar from "component/layout-component/Sidebar";
// import SocialStack from "component/layout-component/SocialStack";

function Blog() {
  return (
    <div>Here</div>
    // <PageTemplate title="Blog">
    //   {/* <PostContainer className={styles.postContainer} data={null} /> */}
    //   <SocialStack />
    // </PageTemplate>
  );
}

export default Blog;
