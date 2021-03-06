import { Container, ImageDiv } from "./styles";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import logo02 from "../../assets/logo-02.png";
import logo03 from "../../assets/logo-03.png";
import logo04 from "../../assets/logo-04.png";
import logo05 from "../../assets/logo-05.png";
import logo06 from "../../assets/logo-06.png";

const BrandsCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <>
      <Container id="Brands">
        <h1>Mauricio Gallo usa e recomenda:</h1>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <ImageDiv>
            <img src={logo02} alt="" />
          </ImageDiv>
          <ImageDiv>
            <img src={logo03} alt="" />
          </ImageDiv>
          <ImageDiv>
            <img src={logo04} alt="" />
          </ImageDiv>
          <ImageDiv>
            <img src={logo05} alt="" />
          </ImageDiv>
          <ImageDiv>
            <img src={logo06} alt="" />
          </ImageDiv>
        </Carousel>
      </Container>
    </>
  );
};

export default BrandsCarousel;
