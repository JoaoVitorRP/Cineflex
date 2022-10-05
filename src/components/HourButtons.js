import colors from "../styles/colors";

import styled from "styled-components";

export default function HourButtons(props) {
  const { showtimes } = props;
  const { ORANGE } = colors;

  return showtimes.map((times) => (
    <Button key={times.id} backgroundColor={ORANGE}>{times.name}</Button>
  ));
}

const Button = styled.button`
  width: 83px;
  height: 43px;
  background: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 3px;
  margin: 0px 8px 30px 0px;
  cursor: pointer;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
`;
