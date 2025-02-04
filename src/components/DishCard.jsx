import styles from "./DishCard.module.css";

const DishCard = (props) => {
  return (
    <div className={styles.dishCard}>
      <h2>{props.tittel} </h2>
      <h3>{props.pris}</h3>
      <p>{props.ingredienser}</p>
    </div>
  );
};

export default DishCard;
