import { Link } from "react-scroll";

import { StyledMobileMenu } from "./styles";

const MobileMenu = ({ isMenuClosed, setClosed, btnText, menuItems }) => {
  return (
    <StyledMobileMenu isMenuClosed={isMenuClosed}>
      <nav>
        <ul>
          {menuItems.map((value, index) => (
            <li key={index}>
              <Link
                onClick={setClosed}
                to={value}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                {value}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://api.whatsapp.com/send?phone=5516993281136&text=Ol%C3%A1%20Mauricio!%20Tenho%20interesse%20em%20aulas%20online."
          target="blank"
          className="contact"
        >
          {btnText}
        </a>
      </nav>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
