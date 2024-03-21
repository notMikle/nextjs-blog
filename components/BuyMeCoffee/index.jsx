import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";
import ScreenEgg from "../ScreenEgg";

const BuyMeCoffe = ({ className }) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(styles.buyCoffee, className)}>
        <a className={styles.buyCoffeeButton}>byMeACoffe</a>
      </div>
    </ScreenEgg>
  );
};

export default BuyMeCoffe;
