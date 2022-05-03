import React from "react";
import styled from "styled-components";

import Contacts from "../components/Contacts";

export default function GetInTouch() {
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

