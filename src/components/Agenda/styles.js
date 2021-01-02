import styled from "styled-components";

export const StyledAgenda = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 10px;

  h1 {
    font-size: 3rem;
    color: #fff;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    width: 95%;
  }
`;

export const CalendarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
