import styles from "./MenuButton.module.css";

const MenuButton = ({ category, onClick }) => {
  return (
    <button className={styles.button} onClick={() => onClick(category)}>
      {category}
    </button>
  );
};

export default MenuButton;
