import { AiFillYoutube } from "react-icons/ai";
import { StyledMusicas } from "./styles";

import YoutubeVideo from "../YoutubeVideo";

const Musicas = () => {
  return (
    <StyledMusicas>
      <h1>Musicas</h1>
      <YoutubeVideo videoId="fCTUrhcxS1c" />
      <h2>
        Clique no botão para acessar meu acanal no youtube e conhecer mais
        musicas minhas
      </h2>
      <a
        href="https://www.youtube.com/channel/UCSBvaqN_wQ4_Vxtg91l9qUA"
        target="blank"
      >
        <AiFillYoutube className="icon" /> Youtube
      </a>
    </StyledMusicas>
  );
};

export default Musicas;
