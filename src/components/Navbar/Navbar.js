import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../logoThinkindia";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";
import Mnitlogo from './mnitlogo.png';
import {useState,useEffect} from 'react';

const NavbarContainer = styled.div`
background-color:orange;
  width: 100%;
  height: 80px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  position: fixed;
  overflow: -moz-hidden-unscrollable;
  z-index: 1;
  .scrolled{
  position: fixed;
  top: 0;
  left: 0;
  background-color: lightblue;
}
  
`;

const LeftSection = styled.div`
  display: flex;
  margin-left: 2%;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
  margin-right: 2%;
`;
const Image = styled.div`
margin-top: 50px;

@media screen and (max-width: 768px) {
    display: none;
  }
`;

export default function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
 
  return (

    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        <Image> <img src={Mnitlogo} alt="" srcset="" height="150px" width="150px" /></Image>
        {isMobile && <MobileNavLinks />}
       
      </RightSection>
    </NavbarContainer>
  );
}
/* \

 <div class="home">
        <div class="nav homenav">
                <h3 class="theme"> Change Theme </h3>
            <label class="switch">
  <input type="checkbox" checked={dark} onChange={()=>setMode(!dark)} />
  <span class="slider round"></span>
  </label>
  </div>
  </div>


const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false
}

const[dark,setMode]=useState(getMode())
useEffect(() => {
    localStorage.setItem("mode",JSON.stringify(dark))


},[dark])
 */