import styled from "styled-components";

export const StyledMobileMenu = styled.div`
  width: 100vw;
  max-width: 100%;
  height: calc(100vh - 60px);
  position: fixed;
  z-index: 1001;
  transition: 0.3s ease;
  left: ${({ isMenuClosed }) => (isMenuClosed ? "100%" : "0")};
  background-color: #000;
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  ul {
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  ul li {
    width: 100%;
    height: 33%;
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    color: #fff;
    font-size: 1.5rem;
  }
  ul li:last-child {
    border-bottom: none;
  }

  a.contact {
    min-height: 40px;
    min-width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    color: #fff;
    font-size: 1.3rem;
    text-decoration: none;
    background-color: #63c9d2;
    cursor: pointer;
  }

  a.contact:hover {
    transition: 0.5s;
    background-color: #16656b;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
