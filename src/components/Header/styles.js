import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  background-color: #000;

  ul,
  li,
  a {
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
    transform: ${({ isMenuClosed }) =>
      isMenuClosed ? "translateY(0)" : "translateY(9px) rotateZ(-45deg)"};
  }

  .stripe:nth-child(2) {
    transition: 0.3s ease;
    background-color: #63c9d2;
    transform: translateY(7px);
    opacity: ${({ isMenuClosed }) => (isMenuClosed ? "1" : "0")};
  }

  .stripe:last-child {
    transition: 0.3s ease;
    transform: ${({ isMenuClosed }) =>
      isMenuClosed ? "translateY(14px)" : "translateY(4px) rotate(45deg)"};
  }

  @media screen and (min-width: 768px) {
    height: 80px;

    #hamburguerMenu {
      display: none;
    }

    .container {
      width: 95%;
    }

    img {
      cursor: pointer;
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
    }

    a {
      text-align: center;
      display: block;
      cursor: pointer;
    }

    a:hover {
      transition: 0.5s;
      color: #63c9d2;
    }

    a.contact {
      min-height: 30px;
      min-width: 110px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      color: #000;
      font-size: 1.2rem;
      text-decoration: none;
      background-color: #63c9d2;
      cursor: pointer;
    }

    a.contact:hover {
      transition: 0.5s;
      color: #fff;
      background-color: #16656b;
    }
  }

  @media screen and (min-width: 992px) {
    li,
    a {
      font-size: 1.3rem;
    }

    a {
      min-width: 140px;
    }
  }
`;
