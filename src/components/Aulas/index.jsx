import { AulasContainer } from "./styles";

import YouTube from "react-youtube";

const Aulas = () => {
  return (
    <>
      <AulasContainer>
        <h1>Aulas</h1>
        <YouTube
          videoId="2P3SYOIREV8"
          containerClassName={"youtubeContainer"}
        />
      </AulasContainer>
    </>
  );
};

export default Aulas;
