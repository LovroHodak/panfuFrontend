import React from "react";
import styled from "styled-components";

import Contacts from "../components/Contacts";

export default function GetInTouch() {
  return (
    <OuterBox>
      <GoToBox>
        <h1>Phone:</h1>
        <h1><a href="tel:00386-40-994-021" style={{textDecoration: 'none', color: 'white'}}>+386-40-994-021</a></h1>
      </GoToBox>
      <GoToBox>
        <h1>Email:</h1>
        <h1 style={{overflowWrap: 'break-word', inlineSize: '220px', textAlignLast: 'center'}}>peter.djokic@gmail.com</h1>
      </GoToBox>
      <FixedContact>
        <Contacts />
      </FixedContact>
    </OuterBox>
  );
}

const OuterBox = styled.div`
  height: calc(100vh - 112px - 112px);
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  & > a {
    text-decoration: none;
  }
  @media screen and (max-width: 464px) {
    margin-bottom: 200px;
  }
`;

const GoToBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  height: 260px;
  border: 2px solid white;
  border-radius: 7px;
  filter: drop-shadow(10px 10px 5px #ccc);
  transition: transform 0.3s ease-in;
  margin: 10px;
  margin-bottom: 80px;
  background-color: black;
  & > h1 {
    color: white;
    margin-top: 40px;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

const FixedContact = styled.div`
  position: fixed;
  bottom: 0;
`;

/* export default function GetInTouch() {
  return (
    <InTouch>
      <TouchEl>
        <ContactTitle>Phone:</ContactTitle>
        <ContactData href="tel:00386-40-994-021" >00386-40-994-021</ContactData>
      </TouchEl>
      <TouchEl>
        <ContactTitle>Email:</ContactTitle>
        <ContactData>peter.djokic@gmail.com</ContactData>
      </TouchEl>
      <FixedContact>
        <Contacts />
      </FixedContact>
    </InTouch>
  );
}

const InTouch = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: calc(100% - 64px);
  margin: auto;
  max-width: 1000px;
  font-size: xx-large;
  
`;

const TouchEl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: auto;
`;

const ContactTitle = styled.h2`
  margin-bottom: 0;
  font-family: mono;
  color: antiquewhite;
  @media screen and (max-width: 530px) {
      font-size: 20px;
    }
`;

const FixedContact = styled.div`
  position: fixed;
  bottom: 0;
`;

const ContactData = styled.a`
font-size: 30px;
font-weight: bold;
text-decoration: none;
color: inherit;
margin: 10px;
@media screen and (max-width: 530px) {
      font-size: 20px;
    }
`
 */
