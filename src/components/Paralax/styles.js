import styled from "styled-components";

import paralax from "../../assets/paralax.jpg";

export const StyledParalax = styled.section`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  background-image: url(${paralax});
  background-size: cover;
  background-position-x: 35%;
  background-attachment: fixed;

  @media screen and (min-width: 768px) {
    background-position: center;
  }
`;
