import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: #000;

  ul,
  li,
  button {
    display: none;
  }

  .container {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #hamburguerMenu {
    width: 28px;
    height: 21px;
    cursor: pointer;
  }

  .stripe {
    width: 100%;
    height: 2.5px;
    background-color: #fff;
  }

  .stripe:first-child {
    transition: 0.3s ease;
    transform: translateY(0);
  }

  .stripe:nth-child(2) {
    transition: 0.3s ease;
    background-color: #63c9d2;
    transform: translateY(7px);
  }

  .stripe:last-child {
    transition: 0.3s ease;
    transform: translateY(14px);
  }

  @media screen and (min-width: 768px) {
    height: 80px;

    #hamburguerMenu {
      display: none;
    }

    .container {
      width: 95%;
    }

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    li {
      height: 100%;
      display: flex;
      align-items: center;
      list-style: none;
      font-size: 1.2rem;
      color: #fff;
      cursor: pointer;
    }

    li:hover {
      transition: 0.5s;
      color: #63c9d2;
    }

    button {
      min-height: 30px;
      min-width: 140px;
      display: block;
      border: none;
      border-radius: 20px;
      color: #fff;
      font-size: 1.3rem;
      cursor: pointer;
      background-color: #63c9d2;
    }

    button:hover {
      transition: 0.5s;
      background-color: #16656b;
    }
  }
`;
