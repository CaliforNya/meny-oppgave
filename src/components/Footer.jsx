import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Om oss</h3>
          <p>
            Vi er den beste restauranten i byen, og tilbyr utsøkte retter og en
            fantastisk atmosfære.Vi serverer dine favorittretter fra alle
            verdenshjørner.Uansett hva du liker, finner du noe som passer din
            smak hos oss.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h3>Kontakt</h3>
          <ul>
            <li>Adresse: Hovedgata 12, 1212 Bergen</li>
            <li>Telefon: +47 123 456 789</li>
            <li>E-post: kontakt@fusionfeast.no</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Åpningstider</h3>
          <ul>
            <li>Mandag - Fredag: 10:00 - 22:00</li>
            <li>Lørdag - Søndag: 12:00 - 23:00</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Restaurant - Alle rettigheter
          forbeholdt.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
