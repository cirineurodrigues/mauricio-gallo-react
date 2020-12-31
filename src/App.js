import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import Banner from "./components/Banner";
import BrandsCarousel from "./components/BrandsCarousel";
import Aulas from "./components/Aulas";
import Bio from "./components/Bio";

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
      <Bio />
    </>
  );
}

export default App;
