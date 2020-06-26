import React from "react";
import styles from "./styles.module.scss";

function Post({ data }) {
  return (
    <div className={styles.post}>
      <div className={styles.cover}>
        <img src={data.cover_image} alt="Pudpark Developer" />
      </div>
      <div className={styles.postContent}>
        <div className={styles.articleHeader}>
          <h2>{data.title}</h2>
          <ul className={styles.tagList}>
            {data.tag_list.map((tag) => {
              return <li className={"defaultColor " + tag}>{tag}</li>;
            })}
          </ul>
          <p className={styles.author + " text-red"}>
            by {data.user.username.toUpperCase()} on{" "}
            {new Date(data.published_at).toLocaleDateString()}
          </p>
        </div>
        <div className={styles.articleBody}>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
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
