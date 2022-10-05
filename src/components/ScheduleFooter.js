import colors from "../styles/colors";

import styled from "styled-components";

export default function ScheduleFooter(props) {
  const { GRAY, DARKGRAY } = colors;
  const { movieInfo } = props;

  return (
    <Footer backgroundColor={GRAY} borderColor={DARKGRAY}>
      <MovieImgContainer>
        <img src={movieInfo.posterURL} alt={movieInfo.title} />
      </MovieImgContainer>
      <h2>{movieInfo.title}</h2>
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
