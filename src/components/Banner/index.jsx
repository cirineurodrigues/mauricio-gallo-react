import { Link } from "react-scroll";

import { StyledBanner } from "./styles";

import mg from "../../assets/mg.png";
import arrow from "../../assets/arrow.png";

const Banner = () => {
  return (
    <StyledBanner id="Home">
      <div className="imgDiv">
        <img src={mg} alt="Card Maurício Gallo" />
      </div>
      <div>
        <Link to="Brands" spy={true} smooth={true} offset={-80} duration={500}>
          <img
            src={arrow}
            alt="Seta apontando para baixo"
            className="animatedArrow"
          />
        </Link>
      </div>
    </StyledBanner>
  );
};

export default Banner;
