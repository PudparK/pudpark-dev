import React, { useState, useEffect } from "react";

// import styles from "./styles.module.scss";

// Components
import Loading from "component/Loading";
import PageHeader from "component/PageHeader";
import PostsContainer from "component/PostsContainer";

//Data
import fetchData from "util/netReq";

function Blog() {
  const [data, setData] = useState(null);

  useEffect(() => {
      fetchData("/.netlify/functions/api/devto").then((data) => setData(data));
  }, []);

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <React.Fragment>
          <PageHeader title="Blog"/>
          <PostsContainer data={data} postType="blog" />
        </React.Fragment>
      )}
    </>
  );
}

export default Blog;
