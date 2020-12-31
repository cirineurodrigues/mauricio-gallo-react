import { StyledNumbers } from "./styles";

const Numbers = ({ number, text }) => {
  return (
    <StyledNumbers>
      <div>{number}</div>
      <h1>{text}</h1>
      <div className="separator"></div>
    </StyledNumbers>
  );
};

export default Numbers;
