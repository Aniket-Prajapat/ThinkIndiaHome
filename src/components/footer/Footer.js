import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Image,
} from "./FooterStyles";
import thinkindia from "./thinkindia.png";
import SocialFollow from "./SocialFollow";
import Copyright from "./Copyright";


const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Image>
              <img
                src={thinkindia}
                alt="Think India"
                style={{ height: "300px" }}
              />
            </Image>
          </Column>
          <Column>
            <Heading>Sections</Heading>
            <FooterLink href="#">DIY</FooterLink>
            <FooterLink href="#">Debate</FooterLink>
            <FooterLink href="#">Enterpenurship</FooterLink>
            <FooterLink href="#">Heritage and Environment</FooterLink>
            <FooterLink href="#">Art and Designing</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Think India</FooterLink>
            <FooterLink href="#">
              Malviya National Institute Of Technology
            </FooterLink>
            <FooterLink href="#">Jaipur</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <SocialFollow />
          </Column>
        </Row>
      
      <Copyright /></Container>
    </Box>
  );
};
export default Footer;
