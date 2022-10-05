import HourButtons from "./HourButtons";

import styled from "styled-components";
import React from "react";

export default function DayInfo(props) {
  const { daysInfo } = props;

  return daysInfo.map((obj) => (
    <React.Fragment key={obj.id}>
      <h3>
        {obj.weekday} - {obj.date}
      </h3>
      <ButtonContainer>
        <HourButtons showtimes={obj.showtimes} />
      </ButtonContainer>
    </React.Fragment>
  ));
}

const ButtonContainer = styled.div`
  display: flex;
`;
