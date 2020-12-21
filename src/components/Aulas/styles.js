import styled from "styled-components";

export const AulasContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    color: #fff;
    padding-bottom: 30px;
  }
  .youtubeContainer {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
    margin-bottom: 30px;
  }

  .youtubeContainer iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;
