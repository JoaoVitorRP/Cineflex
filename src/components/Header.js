import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../styles/colors";

export default function Header() {
  const { GRAY, ORANGE } = colors;

  return (
    <TopBanner backgroundColor={GRAY} textColor={ORANGE}>
      <StyledLink to="/">
        <h1>CINEFLEX</h1>
      </StyledLink>
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

const StyledLink = styled(Link)`
  text-decoration: "none";
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
