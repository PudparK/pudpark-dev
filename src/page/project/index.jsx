import React, { useState, useEffect } from "react";

import PageHeader from "component/PageHeader";
// import PostContainer from "component/PostContainer";

// Data
import fetchData from "util/netReq";

// Component
import Loading from "component/Loading";
import PostsContainer from "component/PostsContainer";

function Project() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchData("/.netlify/functions/api/github").then((data) => setData(data));
  }, []);
  
  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <React.Fragment>
          <PageHeader title="Projects" />
          <PostsContainer data={data} />
        </React.Fragment>
      )}
    </>
  );
}

export default Project;
