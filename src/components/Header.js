import styled from "styled-components";
import colors from "../styles/colors";

export default function Header() {
  const { GRAY, ORANGE } = colors;

  return (
    <TopBanner backgroundColor={GRAY} textColor={ORANGE}>
      <h1>CINEFLEX</h1>
    </TopBanner>
  );
}

const TopBanner = styled.header`
  width: 100vw;
  height: 67px;
  background: ${(props) => props.backgroundColor};

  font-size: 34px;
  color: ${(props) => props.textColor};

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
`;
