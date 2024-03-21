import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";

const Section = ({ className, children }) => {
  return <div className={cl(className, styles.section)}>{children}</div>;
};

export default Section;
