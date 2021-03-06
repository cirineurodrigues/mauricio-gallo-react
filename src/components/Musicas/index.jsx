import { ImYoutube2 } from "react-icons/im";
import { StyledMusicas } from "./styles";

import YoutubeVideo from "../YoutubeVideo";

const Musicas = () => {
  return (
    <StyledMusicas id="Musicas">
      <h1>Musicas</h1>
      <YoutubeVideo videoId="fCTUrhcxS1c" />
      <h2>
        Clique no botão para acessar meu canal no youtube e conhecer mais
        musicas minhas
      </h2>
      <a
        href="https://www.youtube.com/channel/UCSBvaqN_wQ4_Vxtg91l9qUA"
        target="blank"
      >
        <ImYoutube2 className="icon" />
      </a>
    </StyledMusicas>
  );
};

export default Musicas;
