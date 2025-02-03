import styles from "./List.module.css";
import { meny } from "./Menu";

console.log(meny);

const List = () => {
  return (
    <ul className={styles.list}>
      {meny.map((product) => (
        <li key={product.id} className={styles.listItem}>
          {product.tittel}
        </li>
      ))}
    </ul>
  );
};

export default List;
