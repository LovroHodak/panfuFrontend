import React, { useRef, useEffect, useState } from "react";

import Contacts from "../components/Contacts";
import Title from "../components/Title";
import About from "../components/About";
import Songs from "../components/Songs";

export default function Home() {
  const aboutRef = useRef();

  const [hideContactsState, setHideContactsState] = useState(false);

  useEffect(() => {
    const onScroll = (event) => {
      const height = event.target.scrollTop;

      if (height > aboutRef.current.offsetTop) {
        setHideContactsState(true);
      } else {
        setHideContactsState(false);
      }

      /* console.log(height);
      console.log(aboutRef.current.offsetTop);
      console.log(hideContactsState); */
    };

    document.getElementById("root").addEventListener("scroll", onScroll);

    return () =>
      document.getElementById("root").removeEventListener("scroll", onScroll);
  });

  return (
    <>
      <Title />
      <Contacts hide={hideContactsState} />
      <Songs />
      <About ref={aboutRef} />
    </>
  );
}
