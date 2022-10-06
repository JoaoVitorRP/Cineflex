import Seat from "./Seat";
import colors from "../../styles/colors";

import styled from "styled-components";

export default function Seats(props) {
  const { seatsInfo } = props;

  const { GREEN, DARKGREEN, GRAY, DARKGRAY, YELLOW, DARKYELLOW } = colors;

  return (
    <SeatsContainer>
      <Seat seatsInfo={seatsInfo} />
      <ColorsCaption>
        <Caption captionColor={GREEN} borderColor={DARKGREEN} />
        <p>Selecionado</p>
      </ColorsCaption>
      <ColorsCaption>
        <Caption captionColor={GRAY} borderColor={DARKGRAY} />
        <p>Disponível</p>
      </ColorsCaption>
      <ColorsCaption>
        <Caption captionColor={YELLOW} borderColor={DARKYELLOW} />
        <p>Indisponível</p>
      </ColorsCaption>
    </SeatsContainer>
  );
}

const SeatsContainer = styled.div`
  width: 340px;
  margin-bottom: 45px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ColorsCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 15px;

  p {
    font-size: 13px;
  }
`;

const Caption = styled.div`
  width: 26px;
  height: 26px;
  background: ${(props) => props.captionColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 12px;
  margin: 9px 4px;
  cursor: pointer;

  font-size: 11px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
