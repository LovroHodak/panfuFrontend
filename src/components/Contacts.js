import React from "react";
import styled from "styled-components";


export default function Contacts({ hide }) {

  return (
    <ContactsIcons hideThemAll={hide}>
      <a
        href="https://www.youtube.com/channel/UCSfhUZMG9eh7iL6_qkMNPsQ"
        target="blank"
      >
        <i className="bi bi-youtube "></i>
      </a>
      <a href="https://www.facebook.com/PANFU.trio" target="blank">
        <i className="bi bi-facebook "></i>
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=peter.djokic@gmail.com&su=PANFUwebPage"
        target="blank"
      >
        <i className="bi bi-envelope "></i>
      </a>

    </ContactsIcons>
  );
}

const ContactsIcons = styled.div`
  display: flex;
  position: sticky;
  align-items: flex-end;
  justify-content: center;
  gap: 16px;
  // box ima zmeraj ko poscrola do vrha, 16px 'margina'
  top: 16px;
  height: 112px;
  // zato da gre lahko cez elemente
  z-index: 1;
  & a {
    padding: 0px 8px 16px 8px;
    text-decoration: none;
    color: inherit;
    &:hover {
      transform: scale(1.2);
    }
  }

  & i {
    cursor: pointer;
    font-size: 40px;
  }

  ${(props) => props.hideThemAll && "visibility: hidden;"}
`;
