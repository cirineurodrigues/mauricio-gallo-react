import { useState, useEffect } from "react";

import { StyledHeader } from "./styles";
import MobileMenu from "../MobileMenu";

import logo from "../../assets/logo.png";

const Header = ({ menuItems, btnText }) => {
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const setClosed = () => {
    setIsMenuClosed(!isMenuClosed);
  };
  useEffect(() => {}, [isMenuClosed]);

  return (
    <>
      <StyledHeader isMenuClosed={isMenuClosed}>
        <div className="container">
          <img src={logo} alt="Logo Maurício Gallo" />
          <nav>
            <div id="hamburguerMenu" onClick={setClosed}>
              <div className="stripe"></div>
              <div className="stripe"></div>
              <div className="stripe"></div>
            </div>
            <ul>
              {menuItems.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
            <button>{btnText}</button>
          </nav>
        </div>
      </StyledHeader>
      <MobileMenu
        isMenuClosed={isMenuClosed}
        setClosed={setClosed}
        btnText={btnText}
        menuItems={menuItems}
      />
    </>
  );
};

export default Header;
