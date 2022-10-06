import Seats from "./Seats";
import BuyerData from "./BuyerData";

import styled from "styled-components";

export default function SeatsMain(props) {
  const { seatsInfo } = props;

  return (
    <Main>
      <h2>Selecione o(s) assento(s)</h2>
      <Seats seatsInfo={seatsInfo} />
      <BuyerData />
      <ConfirmButton>Reservar assento(s)</ConfirmButton>
    </Main>
  );
}

const Main = styled.main`
  padding: 0px 0px 117px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    margin: 41px 0px 30px 0px;
  }
`;

const ConfirmButton = styled.button`
  width: 225px;
  height: 42px;
`;
