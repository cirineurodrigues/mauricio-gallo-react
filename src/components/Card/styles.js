import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-bottom: 20px;
  color: #fff;
  font-size: 3rem;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: #63c9d2;
`;

export const TextContainer = styled.div`
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
`;
