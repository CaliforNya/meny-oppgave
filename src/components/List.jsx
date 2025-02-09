import styles from "./List.module.css";
import { meny } from "./menu.jsx";
import DishCard from "./DishCard.jsx";
import { useState } from "react";
import MenuButton from "./MenuButton.jsx";

const List = () => {
  const categories = ["Hovedrett", "Forrett", "Dessert"];
  const [selectedCategory, setSelectedCategory] = useState("");

  const showAll = () => {
    setSelectedCategory("");
  };

  const filteredMeny = meny.filter((product) =>
    selectedCategory ? product.kategori === selectedCategory : showAll
  );

  return (
    <>
      <h1>Menu</h1>
      <div className={styles.buttons}>
        {categories.map((category, index) => (
          <MenuButton
            key={index}
            category={category}
            onClick={setSelectedCategory}
          />
        ))}
        <MenuButton key="all" category="All" onClick={showAll} />
      </div>

      <div className={styles.menu}>
        <ul className={styles.list}>
          {filteredMeny.map((product) => (
            <li key={product.id} className={styles.listItem}>
              <DishCard {...product} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
