import React, { useState } from "react";
import styles from "./styles.module.scss";

import BlogPost from "component/BlogPost";
import PostsFilter from "component/PostsFilter";
import ProjectPost from "component/ProjectPost";
import SocialStack from "component/SocialStack";

function PostsContainer({ data, postType }) {
  let postData;
  let renderPosts = [];
  let renderTag = [];

  if (postType === "blog") {
    postData = data;
    renderPosts = postData.map((blogPost, i) => {
      renderTag.push(...blogPost.tag_list);
      return <BlogPost blogPost={blogPost} key={i} />;
    });
  } else {
    postData = data.data.user.repositories.nodes;
    renderPosts = postData.map((project, key) => {
      console.log("postData:", postData);
      if (project.label) {
        renderTag.push(...project.label);
      }
      return project.homepageUrl ? (
        <ProjectPost project={project} key={key} />
      ) : null;
    });
  }

  const [tags, setTags] = useState([]);

  const setActiveTags = (tag) => {
    const activeTags = [...tags];

    const tagIndex = activeTags.indexOf(tag);

    if (tagIndex > -1) {
      activeTags.splice(tagIndex, 1);
    } else {
      activeTags.push(tag);
    }
    setTags(activeTags);
  };

  return (
    <div className={styles.contentContainer + " sub-container"}>
      <div className={styles.sidebar}>
        <PostsFilter
          data={renderTag}
          activeTags={tags}
          onClick={setActiveTags}
        />
      </div>
      <article className={styles.postColumn}>{renderPosts}</article>
      <div className={styles.socialStack}>
        <SocialStack />
      </div>
    </div>
  );
}

export default PostsContainer;
