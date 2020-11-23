import { StyledHeader } from "./styles";

import logo from "../../assets/logo.png";

const Header = ({ menuItems, btnText }) => {
  return (
    <StyledHeader>
      <div className="container">
        <img src={logo} alt="Logo Maurício Gallo" />
        <nav>
          <div id="hamburguerMenu">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
          </div>
          <ul>
            {menuItems.map((value, index) => (
              <li ley={index}>{value}</li>
            ))}
          </ul>
          <button>{btnText}</button>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
