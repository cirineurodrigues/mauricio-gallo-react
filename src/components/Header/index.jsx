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
            <a
              href="https://api.whatsapp.com/send?phone=5516993281136&text=Ol%C3%A1%20Mauricio!%20Tenho%20interesse%20em%20aulas%20online."
              target="blank"
            >
              {btnText}
            </a>
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
