import Info from "../components/Screen4/Info";
import colors from "../styles/colors";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SuccessPage(props) {
  const { sessionInfo, seatsNumber, orderInfo } = props;
  const { DARKGREEN } = colors;
  const navigate = useNavigate();

  function reloadEverything(){
    navigate("/");
    window.location.reload();
  }

  return (
    <Main titleColor={DARKGREEN}>
      <h2>
        Pedido feito
        <br />
        com sucesso!
      </h2>
      <Info
        sessionInfo={sessionInfo}
        seatsNumber={seatsNumber}
        orderInfo={orderInfo}
      />
      <Button onClick={reloadEverything}>Voltar para home</Button>
    </Main>
  );
}

const Main = styled.div`
  padding: 0px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 41px;

    font-weight: 700;
    color: ${(props) => props.titleColor};
    text-align: center;
  }
`;

const Button = styled.button`
  width: 225px;
  height: 42px;
  margin: 100px 0px 30px 0px;
`;
