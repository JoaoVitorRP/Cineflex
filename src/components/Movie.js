import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Movie() {
    const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    const promise = axios.get(URL);
    promise.then((resp) => setMovieInfo(resp.data));
  }, []);

  return (
    (movieInfo.map((obj) => 
        <MovieCard key={obj.id}>
            <img src={obj.posterURL} alt={obj.title}/>
        </MovieCard>
    ))
  );
}

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
