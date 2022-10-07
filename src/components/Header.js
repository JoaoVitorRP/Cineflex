import styled from "styled-components";

import { useLocation, useNavigate } from "react-router-dom";
import arrow from "../assets/arrow-back.svg";
import colors from "../styles/colors";

export default function Header() {
  const { GRAY, ORANGE } = colors;
  const navigate = useNavigate();
  const location = useLocation();
  
  function reloadEverything() {
    navigate("/");
    window.location.reload();
  }

  return (
    <TopBanner
      backgroundColor={GRAY}
      textColor={ORANGE}
      arrowDisplay={location.pathname === "/" ? "none" : "inherit"}
    >
      <img src={arrow} alt="Voltar" onClick={() => navigate(-1)} />
      <h1 onClick={reloadEverything}>CINEFLEX</h1>
    </TopBanner>
  );
}

const TopBanner = styled.header`
  width: 100vw;
  height: 67px;
  background: ${(props) => props.backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  font-size: 34px;
  color: ${(props) => props.textColor};

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  img {
    width: 40px;
    cursor: pointer;
    display: ${(props) => props.arrowDisplay};

    position: absolute;
    left: 30px;
  }

  h1 {
    cursor: pointer;
  }
`;
