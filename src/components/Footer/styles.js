import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 90%;
  margin: 0 auto;

  h1 {
    font-size: 1rem;
    color: #fff;
    text-align: center;
  }
`;

export const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding: 10px 20px;
    color: #fff;
    font-size: 1.5rem;
  }

  a:hover {
    transition: 0.5s;
    color: #63c9d2;
  }
`;

export const Credits = styled.div`
  width: 100%;
  padding: 6px 0;
  background-color: #63c9d2;
  font-size: 1rem;
  text-align: center;

  a {
    color: #000;
    text-decoration: none;
    font-weight: 550;
  }

  @media screen and (min-width: 768px) {
    padding: 4px 0;
  }
`;
