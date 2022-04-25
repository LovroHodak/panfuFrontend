
import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";

import { getPhotos } from "../hooks/useQuery";

import Contacts from "../components/Contacts";

import { API_URL } from "../config";

export default function GigGallery() {
    const query = useQuery(["photos"], getPhotos);

  return (
    <>
      <GalleryContainer>
        {query.isLoading && <div>LOADING...</div>}
        {query.data
          ?.filter((image) => image.category === "koncert")
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
  )
}


const GalleryContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: calc(100% - 64px);
  margin: auto auto 100px auto;
  max-width: 1000px;
`;

const GalleryItem = styled.section`
  width: 300px;
  overflow: hidden;
  margin: 10px;
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
    }
`;

const FixedContact = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;