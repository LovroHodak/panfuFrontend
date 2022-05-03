import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";

import { getPhotos } from "../hooks/useQuery";

import Contacts from "../components/Contacts";

import { API_URL } from "../config";

export default function MembersGallery() {
  const query = useQuery(["photos"], getPhotos);

  return (
    <>
      <GalleryContainer>
        {query.isLoading && <div>LOADING...</div>}
        {query.data
          ?.filter((image) => image.category === "members")
          .map((imag, i) => {
            return (
              <GalleryItem key={i}>
                <img
                  src={`${API_URL}/api/images/${imag.image}`}
                  alt={imag.category}
                />
              </GalleryItem>
            );
          })}
      </GalleryContainer>

      <FixedContact>
        <Contacts />
      </FixedContact>
    </>
  );
}

const GalleryContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: calc(100% - 150px);
  margin: auto auto 100px auto;
  max-width: 1000px;
  //height: calc(100vh - 100px - 112px);
  @media screen and (max-width: 500px) {
      width: calc(100% - 130px);
    }
    @media screen and (max-width: 400px) {
      width: calc(100% - 120px);
    }
  
`;

const GalleryItem = styled.section`
backdrop-filter: blur(10px);
  height: 200.65px;
  width: 300px;
  overflow: hidden;
  margin: 10px;
  transition: transform 0.3s ease-in;
  box-shadow: 10px 10px 5px #ccc;
  & > img {
    box-sizing: border-box;
    border: 2px solid red;
    border-radius: 10px;
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  &:hover {
    transform: scale(1.5);
    z-index: 1;
    box-shadow: unset;
  }
  @media screen and (max-width: 500px) {
      height: unset;
    }
`;

const FixedContact = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;
