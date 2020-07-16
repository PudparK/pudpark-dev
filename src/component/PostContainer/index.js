import React from "react";
import styles from "./styles.module.scss";

function Blog({ blogPosts }) {
  let eachOne = blogPosts.map((blogPost, i) => (
    <div className={styles.Post} key={"blogPost: " + i}>
      <div className={styles.cover}>
        <img src={blogPost.cover_image} alt="Pudpark Developer" />
      </div>
      <div className={styles.PostContent}>
        <div className={styles.articleHeader}>
          <h2>{blogPost.title}</h2>
          <ul className={styles.tagList}>
            {blogPost.tag_list.map((tag, i) => {
              return (
                <li className={"defaultColor " + tag} key={`Tag: ${i}`}>
                  {tag}
                </li>
              );
            })}
          </ul>
          <p className={styles.author + " text-red"}>
            by {blogPost.user.username.toUpperCase()} on{" "}
            {new Date(blogPost.published_at).toLocaleDateString()}
          </p>
        </div>
        <div className={styles.articleBody}>
          <p>{blogPost.description}</p>
        </div>
      </div>
    </div>
  ));
  return eachOne;
}

function Project({ data }) {
  return <></>;
}

function PostContainer({ data, postType }) {
  return (
    <article>
      {postType === "blog" ? (
        <>
          <Blog blogPosts={data} />
          <Blog blogPosts={data} />
          <Blog blogPosts={data} />
          <Blog blogPosts={data} />
        </>
      ) : (
        <Project projectPosts={data} />
      )}
    </article>
  );
}

export default PostContainer;
