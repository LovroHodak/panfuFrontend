import React, { useRef, useState } from "react";
import { useMutation } from "react-query";

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
    <div>
      <h1>ADD ABOUT</h1>
      <form onSubmit={addAbout}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button>Submit</button>
      </form>

      <h1>ADD SONG</h1>
      <form ref={songFormRef} onSubmit={addSong}>
        <input name="title" />
        <input name="image" type="file" alt="image" />
        <input name="videoUrl" />
        <button>add song</button>
      </form>

      <h1>ADD SOCIAL</h1>
      <form ref={socialFormRef} onSubmit={addSocial}>
        <input name="name" />
        <input name="image" type="file" alt="image" />
        <input name="link" />
        <button>add social</button>
      </form>

      <h1>ADD PHOTO</h1>
      <form ref={photoFormRef} onSubmit={addPhoto}>
        <input name="image" type="file" alt="image" />
        <input name="category" />
        <button>add photo</button>
      </form>
    </div>
  );
}
