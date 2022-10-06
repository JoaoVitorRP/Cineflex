import styled from "styled-components";
import Movie from "../components/Screen1/Movie";

export default function MoviesPage() {
  return (
    <Main>
      <h2>Selecione o filme</h2>
      <MoviesContainer>
        <Movie />
      </MoviesContainer>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 41px 0px;
  }
`;

const MoviesContainer = styled.div`
  max-width: 700px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
