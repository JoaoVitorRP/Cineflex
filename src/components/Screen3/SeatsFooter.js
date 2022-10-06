import styled from "styled-components";

import colors from "../../styles/colors";

export default function SeatsFooter(props) {
  const { sessionInfo } = props;
  const { GRAY, DARKGRAY } = colors;

  return (
    <Footer backgroundColor={GRAY} borderColor={DARKGRAY}>
      <MovieImgContainer>
        <img src={sessionInfo.movie.posterURL} alt={sessionInfo.movie.title} />
      </MovieImgContainer>
      <h2>{sessionInfo.movie.title}<br/>{sessionInfo.day.weekday} - {sessionInfo.name}</h2>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100vw;
  height: 117px;
  padding: 30px;
  background: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};

  display: flex;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;

  h2 {
    font-size: 26px;
  }
`;

const MovieImgContainer = styled.div`
  width: 64px;
  height: 89px;
  padding: 8px;
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 15px;

  img {
    width: 48px;
    height: 72px;
    border-radius: 1px;
  }
`;
