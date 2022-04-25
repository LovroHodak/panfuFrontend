import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Contacts from "../components/Contacts";

export default function Gallery() {
  return (
    <OuterBox>
      <Link to="/gallery/gig-2017">
        <GoToBox>
          <h1>Gig 2017</h1>
        </GoToBox>
      </Link>
      <Link to="/gallery/members">
        <GoToBox>
          <h1>Band members</h1>
        </GoToBox>
      </Link>
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
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 260px;
  border: 2px solid green;
  border-radius: 7px;
  box-shadow: 5px 10px;
  margin: 10px;
  margin-bottom: 80px;
  background-color: black;
  & > h1 {
    color: white;
  }
  &:hover {
      transform: scale(1.2);
    }
`;

const FixedContact = styled.div`
  position: fixed;
  bottom: 0;
`;
