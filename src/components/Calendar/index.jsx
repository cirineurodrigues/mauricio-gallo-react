import { StyledCalendar } from "./styles";

import calendar from "../../assets/calendar.png";

const Calendar = ({ dia, mesAno, cidade }) => {
  return (
    <>
      <StyledCalendar>
        <img src={calendar} alt="" />
        <div>
          <h1>{dia}</h1>
          <h2>{mesAno}</h2>
        </div>
        <h3>{cidade}</h3>
      </StyledCalendar>
    </>
  );
};

export default Calendar;
