import React from "react";
//import PText from './PText';
import styled from "styled-components";
//import Developer from '../../pages/Developer/Developer';
import { Button } from "react-bootstrap";
import { useHistory,useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { Router } from "react-router-dom";
import axios from "axios";

const Style = styled.div`
.copyright {
    background-color: orange;
    text-align: center;
    padding: 0px;
    margin-bottom:-50px;
    color:white;
   
  }
  .link{
  color:brown;

  :hover {
    transform: translateY(-3px);
  }
}
    
  }
  @media only screen and (max-width: 768px) {
    
    .copyright {
      
        div {
          margin-top: 0;
        }
      
    }
  }
`;

const Copyright = () => {


  return (<>
  <hr/>
    <div>
      <Style>
        <div className="copyright">
      
          Copyright @ 2021 - Think India MNIT Jaipur| Designed By{" "}
          <Button >Meet Our Developers</Button>
       
        </div>
      </Style>
     
    </div>
    
    </>
  );
};

export default Copyright;
