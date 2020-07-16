import React, { useState, useEffect } from "react";

// import styles from "./styles.module.scss";

// Components
import Loading from "component/Loading";
import PageTemplate from "component/PageTemplate";
import PostContainer from "component/PostContainer";
import SocialStack from "component/SocialStack";
import Sidebar from "component/Sidebar";

//Data
import fetchData from "util/netReq";

function Blog() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData("/.netlify/functions/api/devto").then((data) => setData(data));
    }, 2500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  console.log("data:", data);

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <PageTemplate title="Blog">
          <Sidebar />
          <PostContainer data={data} postType="blog" />
          <SocialStack />
        </PageTemplate>
      )}
    </>
  );
}

export default Blog;
