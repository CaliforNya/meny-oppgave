import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Footer from "./components/Footer.jsx";
import Photos from "./components/Photos.jsx";

import styles from "./App.module.css";

const images = [
  "./img/bolognese.jpg",
  "./img/taco.jpg",
  "./img/shrimps.jpg",
  "./img/entrecote.jpg",
  "./img/brownie.jpg",
];

function App() {
  return (
    <>
      <Header />

      <div id="home" className={styles.section}>
        <Photos images={images} />
      </div>

      <div id="menu" className={styles.section}>
        <List />
      </div>

      <div id="about" className={styles.section}>
        <Footer />
      </div>

    </>
  );
}

export default App;
