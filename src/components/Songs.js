import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import Carousel from "react-multi-carousel";

import { getSongs } from "../hooks/useQuery";

import { API_URL } from "../config";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Songs() {
  const query = useQuery(["songs"], getSongs);

  //console.log(query);

  const [selectedSong, setSelectedSong] = useState();

  return (
    <SongsContainer>
      <Carousel responsive={responsive}>
        {query.data?.map((song, i) => {
          return (
            <SongItemPanfu key={song._id} onClick={() => setSelectedSong(i)}>
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
            </SongItemPanfu>
          );
        }) ?? [<div key="loading">loading</div>]}
      </Carousel>
    </SongsContainer>
  );
}

const SongsContainer = styled.section`
  padding: 5vh 0;
`;

const SongItemPanfu = styled.div`
  height: 35vh;
  position: relative;
  cursor: pointer;
  // zaradi transforma na :hover-ju, da ko fotka naraste ne zapusti svojega okvirja
  overflow: hidden;
  background-color: black;
  margin: 48px;
  @media screen and (max-width: 464px) {
    margin: 16px;
  }
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
    // title komada cez fotko
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
