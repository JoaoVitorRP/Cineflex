import Seats from "./Seats";
import BuyerData from "./BuyerData";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SeatsMain(props) {
  const { seatsInfo, seatsNumber, setSeatsNumber, setOrderInfo } = props;
  const navigate = useNavigate();

  const [selected, setSelected] = useState([]);
  const [buyerName, setBuyerName] = useState([]);
  const [buyerCPF, setBuyerCPF] = useState([]);

  function submitOrder(e){
    e.preventDefault();

    const order = {
      ids: selected,
      name: buyerName,
      cpf: buyerCPF,
    };
    setOrderInfo(order);

    const req = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", order);

    req.then(() => navigate("/sucesso"));
    req.catch((err) => alert(err.response.data.message));
  }

  return (
    <Main>
      <h2>Selecione o(s) assento(s)</h2>
      <Seats
        seatsInfo={seatsInfo}
        setSelected={setSelected}
        selected={selected}
        seatsNumber={seatsNumber}
        setSeatsNumber={setSeatsNumber}
      />
      <form onSubmit={submitOrder}>
        <BuyerData setBuyerName={setBuyerName} setBuyerCPF={setBuyerCPF} />
        <ConfirmButton type="submit" data-identifier="reservation-btn">
          Reservar assento(s)
        </ConfirmButton>
      </form>
    </Main>
  );
}

const Main = styled.main`
  padding-bottom: 117px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    margin: 41px 0px 30px 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ConfirmButton = styled.button`
  width: 225px;
  height: 42px;
  margin-bottom: 30px;
`;
