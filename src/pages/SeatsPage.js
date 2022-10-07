import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import loadingWheel from "../assets/loading.gif";
import SeatsMain from "../components/Screen3/SeatsMain";
import SeatsFooter from "../components/Screen3/SeatsFooter";

export default function SeatsPage(props) {
  const { sessionInfo, setSessionInfo, seatsNumber, setSeatsNumber, setOrderInfo } = props;

  const { sessionID } = useParams();


  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`;
    const promise = axios.get(URL);

    promise.then((resp) => setSessionInfo(resp.data));
    promise.catch(() =>
      alert("Um erro ocorreu, por favor recarregue a página")
    );
  }, []);

  if (sessionInfo.length === 0) {
    return (
      <LoadingScreen>
        <h2>Carregando a lista de assentos...</h2>
        <img src={loadingWheel} alt="Loading Wheel GIF" />
      </LoadingScreen>
    );
  }

  return (
    <SeatsScreen>
      <SeatsMain seatsInfo={sessionInfo.seats} seatsNumber={seatsNumber} setSeatsNumber={setSeatsNumber} setOrderInfo={setOrderInfo}/>
      <SeatsFooter sessionInfo={sessionInfo} />
    </SeatsScreen>
  );
}

const LoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 41px 0px 15px 0px;
  }

  img {
    width: 120px;
  }
`;

const SeatsScreen = styled.div`
  display: flex;
  justify-content: center;
`;
