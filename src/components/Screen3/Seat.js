import colors from "../../styles/colors";

import styled from "styled-components";

export default function Seat(props) {
  const { seatsInfo } = props;
  const { GRAY, DARKGRAY, YELLOW, DARKYELLOW } = colors;

  function setBackgroundColor(isAvailable){
    switch(isAvailable) {
      case true : return GRAY
      case false : return YELLOW
      default : return GRAY
    }
  }

  function setBorderColor(isAvailable){
    switch(isAvailable) {
      case true : return DARKGRAY
      case false : return DARKYELLOW
      default : return DARKGRAY
    }
  }

  return seatsInfo.map((seats) => (
    <SeatButton
      key={seats.id}
      backgroundColor={setBackgroundColor(seats.isAvailable)}
      borderColor={setBorderColor(seats.isAvailable)}
      cursorStyle={seats.isAvailable ? "pointer" : "default"}
    >
      {seats.name}
    </SeatButton>
  ));
}

const SeatButton = styled.button`
  width: 26px;
  height: 26px;
  background: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 12px;
  margin: 9px 4px;
  cursor: ${(props) => props.cursorStyle};

  font-size: 11px;
  color: #000000;

  display: flex;
  align-items: center;
  justify-content: center;
`;
