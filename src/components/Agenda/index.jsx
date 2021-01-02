import { StyledAgenda, CalendarContainer } from "./styles";

import Calendar from "../Calendar";

const Agenda = () => {
  return (
    <StyledAgenda>
      <h1>Agenda</h1>
      <CalendarContainer>
        <Calendar dia="15" mesAno="Jan/21" cidade="Ibaté-SP" />
        <Calendar dia="15" mesAno="Jan/21" cidade="Ibaté-SP" />
        <Calendar dia="15" mesAno="Jan/21" cidade="Ibaté-SP" />
        <Calendar dia="15" mesAno="Jan/21" cidade="Ibaté-SP" />
        <Calendar dia="15" mesAno="Jan/21" cidade="Ibaté-SP" />
        <Calendar dia="15" mesAno="Jan/21" cidade="Ibaté-SP" />
      </CalendarContainer>
    </StyledAgenda>
  );
};

export default Agenda;
