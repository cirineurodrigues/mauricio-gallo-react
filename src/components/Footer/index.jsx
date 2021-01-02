import { StyledFooter, SocialContainer, Credits } from "./styles";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <h1>Me acompanhe nas redes sociais</h1>
        <SocialContainer>
          <a href="https://www.facebook.com/mauricio.gallo.39" target="blank">
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/mauricio_gallo_/?hl=pt-br"
            target="blank"
          >
            <FiInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCSBvaqN_wQ4_Vxtg91l9qUA"
            target="blank"
          >
            <AiFillYoutube />
          </a>
        </SocialContainer>
      </StyledFooter>
      <Credits>
        Made with ❤️ by{" "}
        <a href="https://www.linkedin.com/in/cirineurodrigues/" target="blank">
          Cirineu Rodrigues
        </a>
      </Credits>
    </>
  );
};

export default Footer;
