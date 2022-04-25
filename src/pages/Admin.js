import React, { useRef, useState } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";

import { newAbout, newSong, newSocial, newPhoto } from "../hooks/useQuery";

export default function Admin() {
  const [text, setText] = useState("");

  const aboutMutation = useMutation(() => newAbout({ text }), {
    onSuccess: () => setText(""),
  });

  const songFormRef = useRef();

  const songMutation = useMutation((songFormData) => newSong(songFormData), {
    onSuccess: () => songFormRef.current.reset(),
  });

  const socialFormRef = useRef();

  const socialMutation = useMutation(
    (socialFormData) => newSocial(socialFormData),
    {
      onSuccess: () => socialFormRef.current.reset(),
    }
  );

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

  function addSocial(e) {
    e.preventDefault();
    const socialFormData = new FormData(e.target);
    socialMutation.mutate(socialFormData);
    console.log(socialFormData);
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
            style={{ width: "80%" }}
            placeholder="write content here"
          ></textarea>
          <button>Submit</button>
        </Forms>
      </AddingDivs>

      <AddingDivs>
        <h1>ADD SONG</h1>
        <Forms ref={songFormRef} onSubmit={addSong}>
          <input name="image" type="file" alt="image" />
          <input name="title" placeholder="song title" />

          <input name="videoUrl" placeholder="video url" />
          <button>Add song</button>
        </Forms>
      </AddingDivs>

      <AddingDivs>
        <h1>ADD SOCIAL</h1>
        <Forms ref={socialFormRef} onSubmit={addSocial}>
          <input name="image" type="file" alt="image" />
          <input name="name" placeholder="name of social" />

          <input name="link" placeholder="link" />
          <button>Add social</button>
        </Forms>
      </AddingDivs>

      <AddingDivs>
        <h1>ADD PHOTO</h1>
        <Forms ref={photoFormRef} onSubmit={addPhoto}>
          <input name="image" type="file" alt="image" />
          <input name="category" placeholder="members || koncert" />
          <button>Add photo</button>
        </Forms>
      </AddingDivs>
    </AdminContainer>
  );
}

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
justify-content: space-between
`
