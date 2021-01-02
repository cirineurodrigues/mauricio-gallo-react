import styled from "styled-components";

export const StyledNumbers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 300;
  color: #fff;

  h1 {
    font-size: 1.2rem !important;
    color: #474949;
    padding-bottom: 10px;
  }

  .separator {
    width: 90px;
    height: 2px;
    background-color: #63c9d2;
  }

  @media screen and (min-width: 768px) {
    width: 25%;
  }
`;
