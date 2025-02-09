import List from "./components/List.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Photos from "./components/Photos.jsx";

import "./App.css";

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

      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <Photos images={images} />
      </div>

      <List />
      <Footer />
    </>
  );
}

export default App;
