import React from "react";
import styles from "./styles.module.scss";

function Post({ posts }) {
  let eachOne = posts.map((post, i) => (
    <div className={styles.post} key={"Post: " + i}>
      <div className={styles.cover}>
        <img src={post.cover_image} alt="Pudpark Developer" />
      </div>
      <div className={styles.postContent}>
        <div className={styles.articleHeader}>
          <h2>{post.title}</h2>
          <ul className={styles.tagList}>
            {post.tag_list.map((tag, i) => {
              return (
                <li className={"defaultColor " + tag} key={`Tag: ${i}`}>
                  {tag}
                </li>
              );
            })}
          </ul>
          <p className={styles.author + " text-red"}>
            by {post.user.username.toUpperCase()} on{" "}
            {new Date(post.published_at).toLocaleDateString()}
          </p>
        </div>
        <div className={styles.articleBody}>
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  ));
  return eachOne;
}

function PostContainer({ posts }) {
  return (
    <article>
      <Post posts={posts} />
    </article>
  );
}

export default PostContainer;
