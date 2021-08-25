import styled from "styled-components";
export const Image = styled.div`
  :hover {
    transform: translateY(-30px);
  }
  margin-left: -200px;
  width: 300px;
  @media screen and (max-width: 768px) {
    height: 30px;
    width: 30px;
	margin-left:-100px;
  }
  @media screen and (max-width: 486px) {
    height: 50px;
    width: 50px;
  }
`;

export const Box = styled.div`
  padding: 60px 80px;
  background: orange;
  position: absolute;

  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
  &:hover {
    transform: translateY(-3px);
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
