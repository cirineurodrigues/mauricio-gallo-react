import styled from "styled-components";

import paralax from "../../assets/paralax.jpg";

export const StyledParalax = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  background-image: url(${paralax});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;
