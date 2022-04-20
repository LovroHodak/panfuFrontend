import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";

import { getSongs } from "../hooks/useQuery";

import Contacts from "../components/Contacts";

import { API_URL } from "../config";

export default function Music() {
  const [selectedSong, setSelectedSong] = useState();

  const query = useQuery(["songs"], getSongs);

  console.log(query);

  return (
    <>
      <MusicContainer>
        {query.isLoading && <div>LOADING...</div>}
        {query.data?.map((song, i) => {
          return (
            <MusicItem key={i} onClick={() => setSelectedSong(i)}>
              {selectedSong === i ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={song.videoUrl}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : (
                <>
                  <img
                    src={`${API_URL}/api/images/${song.image}`}
                    alt={song.title}
                  />
                  <div>{song.title}</div>
                </>
              )}
            </MusicItem>
          );
        })}
      </MusicContainer>
      <FixedContact>
        <Contacts />
      </FixedContact>
    </>
  );
}

const MusicContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: calc(100% - 64px);
  margin: auto auto 50px auto;
  max-width: 1000px;
`;

const MusicItem = styled.section`
  width: 300px;
  height: 226px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background-color: black;
  margin: 10px;
  & > img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
    transition: transform 0.7s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
  & > div {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: #00000099;
    padding: 8px 32px;
    text-align: center;
  }
  & iframe {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const FixedContact = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;
