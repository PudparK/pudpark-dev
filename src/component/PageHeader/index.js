import React from "react";
import styles from "./styles.module.scss";

// Components
function PageHeader({ title }) {
  return (
    <div className={styles.pageHeader}>
      <h1>
        {title}
        <span>.</span>
      </h1>
    </div>
  );
}
export default PageHeader;
