import { StyledBanner } from "./styles";

import mg from "../../assets/mg.png";
import arrow from "../../assets/arrow.png";

const Banner = () => {
  return (
    <StyledBanner>
      <div className="imgDiv">
        <img src={mg} alt="Card Maurício Gallo" />
      </div>
      <div>
        <img
          src={arrow}
          alt="Seta apontando para baixo"
          className="animatedArrow"
        />
      </div>
    </StyledBanner>
  );
};

export default Banner;
