import { AulasContainer } from "./styles";

import YouTube from "react-youtube";

const Aulas = () => {
  return (
    <>
      <AulasContainer>
        <h1>Aulas</h1>
        <YouTube
          videoId="fCTUrhcxS1c"
          containerClassName={"youtubeContainer"}
        />
      </AulasContainer>
    </>
  );
};

export default Aulas;
