import styled from "styled-components";

import bannerBg from "../../assets/bannerBg.png";

export const StyledBanner = styled.section`
  height: calc(100vh - 60px);
  min-height: 400px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
    url(${bannerBg});
  background-size: cover;
  background-position-x: 50%;

  .imgDiv {
    display: none;
  }

  .animatedArrow {
    cursor: pointer;
    -moz-animation: bounce 1.5s infinite ease-in-out;
    -webkit-animation: bounce 1.5s infinite ease-in-out;
    animation: bounce 1.5s infinite ease-in-out;
  }

  @keyframes bounce {
    0%,
    50%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
  }

  @media screen and (min-width: 768px) {
    height: calc(100vh - 80px);
    min-height: 450px;
    margin-top: 80px;

    .imgDiv {
      width: 95%;
      height: 90%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;
