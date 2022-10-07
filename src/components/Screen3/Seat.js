import colors from "../../styles/colors";

import styled from "styled-components";

export default function Seat(props) {
  const {
    seatsInfo,
    setSelected,
    selected,
    seatsNumber,
    setSeatsNumber,
    setSeatValid,
  } = props;
  const { GREEN, DARKGREEN, GRAY, DARKGRAY, YELLOW, DARKYELLOW } = colors;

  function setBackgroundColor(isAvailable) {
    switch (isAvailable) {
      case true:
        return GRAY;
      case false:
        return YELLOW;
      default:
        return GRAY;
    }
  }

  function setBorderColor(isAvailable) {
    switch (isAvailable) {
      case true:
        return DARKGRAY;
      case false:
        return DARKYELLOW;
      default:
        return DARKGRAY;
    }
  }

  function pickSeat(seatId, seatNumber, isAvailable) {
    let selectedCopy = [...selected];
    let seatsNumberCopy = [...seatsNumber];

    if (selected.includes(seatId)) {
      selectedCopy = selected.filter((id) => id !== seatId);
      seatsNumberCopy = seatsNumber.filter((num) => num !== seatNumber);
      setSeatValid(false);
    } else {
      selectedCopy = [...selected, seatId];
      seatsNumberCopy = [...seatsNumber, seatNumber];
      setSeatValid(true);
    }

    if (isAvailable === false) {
      selectedCopy = selected.filter((id) => id !== seatId);
      seatsNumberCopy = seatsNumber.filter((num) => num !== seatNumber);
      setSeatValid(false);
      alert("Esse assento não está disponível");
    }

    setSelected(selectedCopy);
    setSeatsNumber(seatsNumberCopy);
  }

  return seatsInfo.map((seat) => (
    <SeatButton
      key={seat.id}
      data-identifier="seat"
      backgroundColor={
        selected.includes(seat.id)
          ? GREEN
          : setBackgroundColor(seat.isAvailable)
      }
      borderColor={
        selected.includes(seat.id)
          ? DARKGREEN
          : setBorderColor(seat.isAvailable)
      }
      cursorStyle={seat.isAvailable ? "pointer" : "default"}
      onClick={() => pickSeat(seat.id, seat.name, seat.isAvailable)}
    >
      {seat.name}
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
