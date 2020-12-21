import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import Banner from "./components/Banner";
import BrandsCarousel from "./components/BrandsCarousel";
import Aulas from "./components/Aulas";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header
        menuItems={["Home", "Aulas", "Biografia", "Musicas", "Agenda", "Fotos"]}
        btnText="Contato"
      />
      <Banner />
      <BrandsCarousel />
      <Aulas />
    </>
  );
}

export default App;
