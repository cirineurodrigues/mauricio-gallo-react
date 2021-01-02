import styled from "styled-components";

export const StyledCalendar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  color: #fff;

  img {
    min-width: 200px;
    position: relative;
  }

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 4rem !important;
    padding-bottom: 0;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    margin: 10px 0;
  }

  @media screen and (min-width: 768px) {
    width: 33.33%;
  }
`;
