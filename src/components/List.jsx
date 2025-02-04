import styles from "./List.module.css";
import { meny } from "./Menu.jsx";
import DishCard from "./DishCard.jsx";

console.log(meny);

const List = () => {
  return (
    <>
      <h1>Menu</h1>
      <div className={styles.menu}>
        <ul className={styles.list}>
          {meny.map((product) => (
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
