import React from "react";

import styles from "./Header.module.css";

import meals from "../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>MealGo</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="Table with delicious Meals" />
      </div>
    </>
  );
};

export default Header;
