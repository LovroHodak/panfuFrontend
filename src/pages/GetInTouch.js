import React from "react";
import styled from "styled-components";

import Contacts from "../components/Contacts";

export default function GetInTouch() {
  return (
    <InTouch>
      <TouchEl>
        <ContactTitle>Phone:</ContactTitle>
        <h3>00386-40-994-021</h3>
      </TouchEl>
      <TouchEl>
        <ContactTitle>Email:</ContactTitle>
        <h3>peter.djokic@gmail.com</h3>
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
`;

const FixedContact = styled.div`
  position: fixed;
  bottom: 0;
`;


