import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

function PostsFilter({ data, activeTags, onClick }) {
  const tags = [...new Set(data)];

  return (
    <ul className={styles.tagList}>
      {tags.map((tag, i) => {
        return (
          <li key={i}>
            <span
              className={
                "defaultColor " +
                styles[tag] +
                " " +
                classNames({
                  [styles[tag + "-active"]]: activeTags.includes(tag),
                })
              }
              key={`Tag: ${i}`}
              onClick={() => onClick(tag)}
            >
              {tag}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default PostsFilter;
