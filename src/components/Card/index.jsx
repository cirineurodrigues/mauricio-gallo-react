import { StyledCard, IconContainer, TextContainer } from "./styles";

const Card = ({ children, text }) => {
  return (
    <StyledCard>
      <IconContainer>{children}</IconContainer>
      <TextContainer>{text}</TextContainer>
    </StyledCard>
  );
};

export default Card;
