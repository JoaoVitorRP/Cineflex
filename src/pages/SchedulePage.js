import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import loadingWheel from "../assets/loading.gif";
import ScheduleMain from "../components/Screen2/ScheduleMain";
import ScheduleFooter from "../components/Screen2/ScheduleFooter";

export default function SchedulePage() {
  const { movieID } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`;
    const promise = axios.get(URL);

    promise.then((resp) => setMovieInfo(resp.data));
    promise.catch(() =>
      alert("Um erro ocorreu, por favor recarregue a página")
    );
  }, [movieID]);

  if (movieInfo.length === 0) {
    return (
      <LoadingScreen>
        <h2>Carregando os horários...</h2>
        <img src={loadingWheel} alt="Loading Wheel GIF" />
      </LoadingScreen>
    );
  }

  return (
    <>
      <ScheduleMain daysInfo={movieInfo.days} />
      <ScheduleFooter movieInfo={movieInfo} />
    </>
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
