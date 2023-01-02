import React from "react";

import styles from "./Header.module.css";

import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>MealGo</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="Table with delicious Meals" />
      </div>
    </>
  );
};

export default Header;
