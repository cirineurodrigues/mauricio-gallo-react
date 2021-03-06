import { AulasContainer, CardsContainer, NumbersContainer } from "./styles";

import YoutubeVideo from "../YoutubeVideo";
import Card from "../Card";
import Numbers from "../Numbers";

import { GiGuitarHead } from "react-icons/gi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Aulas = () => {
  return (
    <>
      <AulasContainer id="Aulas">
        <h1>Aulas</h1>
        <CardsContainer>
          <Card
            text={
              "Aulas presenciais em diversas escolas na cidade de São Carlos e na Guitar & Cia em Ibaté"
            }
          >
            <GiGuitarHead />
          </Card>
          <Card
            text={
              "Aulas no conforto da sua casa via videoconferência, com a mesma qualidade do presencial"
            }
          >
            <BsFillCameraVideoFill />
          </Card>
          <Card
            text={
              "Grupo de aulas no Whats App, aulas exclusivas com turmas separadas por nível e um preço acessivel"
            }
          >
            <IoLogoWhatsapp />
          </Card>
        </CardsContainer>
        <YoutubeVideo videoId="2P3SYOIREV8" />
        <NumbersContainer>
          <Numbers number={1000} text="Alunos" />
          <Numbers number={20} text="Anos de experiência" />
          <Numbers number={98} text="% de alunos satisfeitos" />
          <Numbers number={5} text="Cursos concluídos" />
        </NumbersContainer>
      </AulasContainer>
    </>
  );
};

export default Aulas;
