import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import colors from "../styles/colors";

export default function Header() {
  const { GRAY, ORANGE } = colors;
  const navigate = useNavigate();

  function reloadEverything(){
    navigate("/");
    window.location.reload();
  }

  return (
    <TopBanner backgroundColor={GRAY} textColor={ORANGE}>
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

  h1{
    cursor: pointer;
  }
`;
