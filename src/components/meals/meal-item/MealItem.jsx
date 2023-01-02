import React from "react";
import styles from "./MealItem.module.css";

const MealItem = ({ meal }) => {
  const price = `$${meal.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <p className={styles.description}>{meal.description}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
