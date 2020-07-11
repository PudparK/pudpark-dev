import React from "react";
import styles from "./styles.module.scss";

function Post({ posts }) {
  if (!posts) {
    return <p>un segundo</p>;
  } else {
    return (
      <div className={styles.post}>
        <div className={styles.cover}>
          <img src={posts.cover_image} alt="Pudpark Developer" />
        </div>
        <div className={styles.postContent}>
          <div className={styles.articleHeader}>
            <h2>{posts.title}</h2>
            <ul className={styles.tagList}>
              {posts.tag_list.map((tag) => {
                return <li className={"defaultColor " + tag}>{tag}</li>;
              })}
            </ul>
            <p className={styles.author + " text-red"}>
              by {posts.user.username.toUpperCase()} on{" "}
              {new Date(posts.published_at).toLocaleDateString()}
            </p>
          </div>
          <div className={styles.articleBody}>
            <p>{posts.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

function PostContainer({ className, data }) {
  return (
    <article className={className}>
      <Post data={data} />
      <Post data={data} />
      <Post data={data} />
    </article>
  );
}

export default PostContainer;
