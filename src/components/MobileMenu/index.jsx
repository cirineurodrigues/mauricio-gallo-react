import { StyledMobileMenu } from "./styles";

const MobileMenu = ({ isMenuClosed, setClosed, btnText, menuItems }) => {
  return (
    <StyledMobileMenu isMenuClosed={isMenuClosed}>
      <nav>
        <ul>
          {menuItems.map((value, index) => (
            <li key={index} onClick={setClosed}>
              {value}
            </li>
          ))}
        </ul>
        <button>{btnText}</button>
      </nav>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
