import React, { useRef, useState } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";

import { newAbout, newSong, newPhoto } from "../hooks/useQuery";

export default function Admin() {
  const [text, setText] = useState("");

  const aboutMutation = useMutation(() => newAbout({ text }), {
    onSuccess: () => setText(""),
  });

  const songFormRef = useRef();

  const songMutation = useMutation((songFormData) => newSong(songFormData), {
    onSuccess: () => songFormRef.current.reset(),
  });

  const photoFormRef = useRef();

  const photoMutation = useMutation(
    (photoFormData) => newPhoto(photoFormData),
    {
      onSuccess: () => photoFormRef.current.reset(),
    }
  );

  function addAbout(e) {
    e.preventDefault();
    aboutMutation.mutate();
  }

  function addSong(e) {
    e.preventDefault();
    const songFormData = new FormData(e.target);
    songMutation.mutate(songFormData);

    console.log(songFormData);
    console.log(e.target);
  }

  function addPhoto(e) {
    e.preventDefault();
    const photoFormData = new FormData(e.target);
    photoMutation.mutate(photoFormData);
    console.log(photoFormData);
    console.log(e.target);
  }

  console.log(text);
  return (
    <AdminContainer>
      <AddingDivs>
        <h1>ADD ABOUT</h1>
        <Forms onSubmit={addAbout}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            /* style={{ width: "80%" }} */
            placeholder="write content here"
          ></textarea>
          <Inputs name="password" type="password" placeholder="geslo" />
          <Buttons>Submit</Buttons>
        </Forms>
      </AddingDivs>

      <TwoDivs>
        <AddingDivs>
          <h1>ADD SONG</h1>
          <Forms ref={songFormRef} onSubmit={addSong}>
            <Inputs name="image" type="file" alt="image" />
            <Inputs name="title" placeholder="song title" />

            <Inputs name="videoUrl" placeholder="video url" />
            <Inputs name="password" type="password" placeholder="geslo" />
            <Buttons>Add song</Buttons>
          </Forms>
        </AddingDivs>

        <AddingDivs>
          <h1>ADD PHOTO</h1>
          <Forms ref={photoFormRef} onSubmit={addPhoto}>
            <Inputs name="image" type="file" alt="image" />
            <Inputs name="category" placeholder="members || koncert" />
            <Inputs name="password" type="password" placeholder="geslo" />
            <Buttons>Add photo</Buttons>
          </Forms>
        </AddingDivs>
      </TwoDivs>
    </AdminContainer>
  );
}
const TwoDivs = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 50px;
@media screen and (max-width: 725px) {
      flex-direction: column;
    }
`
const AdminContainer = styled.div`
  width: 80%;
  margin: auto;
`;

const AddingDivs = styled.div`
  display: flex;
  flex-direction: column;
`;

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Inputs = styled.input`
  margin: 10px 0px;
  width: 250px;
`;

const Buttons = styled.button`
  width: 258px;
`;
