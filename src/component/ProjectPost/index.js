import React from "react";
import styles from "./styles.module.scss";

import Post from "component/Post";

function ProjectPost({ project }) {
  return (
    <Post>
      {project.homepageUrl ? (
        <iframe
          scrolling="no"
          src={project.homepageUrl}
          className={styles.scrollbar}
          title={project.description}
        ></iframe>
      ) : (
        ""
      )}
      <div className={styles.articleHeader}>
        <a href={project.homepageUrl ? project.homepageUrl : ""}>
          <h2>{project.name}</h2>
        </a>
        <p className="text-red">{project.createdAt}</p>
      </div>
      <div className={styles.articleBody}>
        <p>{project.description}</p>
      </div>
    </Post>
  );
}

export default ProjectPost;
