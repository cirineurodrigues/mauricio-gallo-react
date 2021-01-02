import styled from "styled-components";

import bio from "../../assets/bio.jpg";

export const StyledBio = styled.div`
  width: 100%;
  padding: 0 5%;
  margin-bottom: 40px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
    url(${bio});
  background-size: cover;
  background-position-x: 40%;
  box-shadow: inset 0px 9px 14px 2px rgba(0, 0, 0, 1);
  color: #fff;
  font-size: 1.2rem;
  text-align: justify;

  h1 {
    text-align: center;
    font-size: 3rem;
    padding-bottom: 25px;
  }

  p {
    padding: 5px 0;
    text-indent: 2em;
  }

  @media screen and (min-width: 768px) {
    padding: 0 2.5%;
    background-position-x: center;
  }
`;
