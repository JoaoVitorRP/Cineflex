import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HourButtons(props) {
  const { showtimes } = props;

  return showtimes.map((times) => (
    <Link to={`/sessao/${times.id}`} key={times.id}>
      <Button>{times.name}</Button>
    </Link>
  ));
}

const Button = styled.button`
  width: 83px;
  height: 43px;
  margin: 0px 8px 30px 0px;
`;
