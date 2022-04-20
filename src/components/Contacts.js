import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

import { getSocial } from "../hooks/useQuery";

import { API_URL } from "../config";

export default function Contacts({ hide }) {
  const query = useQuery(["socials"], getSocial);
  console.log(query);

  return (
    <ContactsIcons hideThemAll={hide} style={{ position: "sticky" }}>
      {query.isLoading && <div>LOADING...</div>}
      {query.data?.map((soc, i) => {
        return (
          <div key={i}>
            <a href={soc.link} target="blank">
              <img src={`${API_URL}/api/images/${soc.image}`} alt={soc.name} />
            </a>
          </div>
        );
      })}
    </ContactsIcons>
  );
}

const ContactsIcons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 16px;
  // box ima zmeraj ko poscrola do vrha, 16px 'margina'
  top: 16px;
  height: 112px;
  // zato da gre lahko cez elemente
  z-index: 1;
  & img {
    width: 32px;
    padding-bottom: 16px;
  }

  ${(props) => props.hideThemAll && "visibility: hidden;"}
`;
