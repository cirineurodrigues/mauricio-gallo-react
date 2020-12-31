import YouTube from "react-youtube";

import { VideoContainer } from "./styles";

const YoutubeVideo = ({ videoId }) => {
  return (
    <VideoContainer>
      <YouTube videoId={videoId} containerClassName={"youtubeContainer"} />
    </VideoContainer>
  );
};

export default YoutubeVideo;
