import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import loadingWheel from "../assets/loading.gif";

export default function Movie() {
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
    const promise = axios.get(URL);

    promise.then((resp) => setMovieInfo(resp.data));
    promise.catch(() =>
      alert("Um erro ocorreu, por favor recarregue a página")
    );
  }, []);

  if (movieInfo.length === 0) {
    return (
      <LoadingScreen>
        <h2>Carregando a lista de filmes...</h2>
        <img src={loadingWheel} alt="Loading Wheel GIF" />
      </LoadingScreen>
    );
  }

  return movieInfo.map((obj) => (
    <Link key={obj.id} to={`/filme/${obj.id}`}>
      <MovieCard>
        <img src={obj.posterURL} alt={obj.title} />
      </MovieCard>
    </Link>
  ));
}

const LoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 15px;
  }

  img {
    width: 120px;
  }
`;

const MovieCard = styled.div`
  width: 145px;
  height: 209px;
  padding: 8px;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  margin: 6px 15px;
  cursor: pointer;

  img {
    width: 129px;
    height: 193px;
    border-radius: 1.5px;
  }
`;
