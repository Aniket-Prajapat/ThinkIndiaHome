import React from "react";
import styled from "styled-components";
import ThinkIndia from "./Thinkindia.jpg";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
margin-top:80px;
  width: 150px;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 22px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={ThinkIndia} alt="Think India  MNIT Jaipur" />
      </LogoImg>
      <LogoText>Think India MNIT</LogoText>
    </LogoWrapper>
  );
}
