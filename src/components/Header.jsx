import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.name}>Fusion Feast</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#home">Hjem</a>
          </li>
          <li>
            <a href="#menu">Meny</a>
          </li>
          <li>
            <a href="#about">Om Oss</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
