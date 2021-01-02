import styled from "styled-components";

export const StyledMusicas = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: center;
  color: #fff;

  h1 {
    font-size: 3rem;
    padding-bottom: 30px;
  }

  h2 {
    font-size: 1.2rem;
    padding-top: 30px;
  }

  a {
    min-height: 50px;
    min-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    border: none;
    border-radius: 20px;
    color: #000;
    font-size: 1.2rem;
    background-color: #63c9d2;
    text-decoration: none;
    cursor: pointer;
    outline: none;
  }

  a:hover {
    transition: 0.5s;
    color: #fff;
    background-color: #16656b;
  }

  .icon {
    padding: 0 5px;
    font-size: 2rem;
  }

  @media screen and (min-width: 768px) {
    width: 95%;
  }
`;
