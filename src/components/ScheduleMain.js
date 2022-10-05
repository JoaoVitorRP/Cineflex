import DayInfo from "../components/DayInfo";

import styled from "styled-components";

export default function ScheduleMain(props) {
  const { daysInfo } = props;

  return (
    <Main>
      <h2>Selecione o horário</h2>
      <DayInfo daysInfo={daysInfo} />
    </Main>
  );
}

const Main = styled.main`
  padding: 0px 0px 117px 30px;

  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
    margin: 41px 0px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;
