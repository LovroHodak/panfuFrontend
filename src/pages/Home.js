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

      console.log(height);
      console.log(aboutRef.current.offsetTop);
      console.log(hideContactsState);
    };

    document.getElementById("root").addEventListener("scroll", onScroll);

    return () =>
      document.getElementById("root").removeEventListener("scroll", onScroll);
  });
  return (
    <>
      <Title />
      {/* <svg width="100" height="100" viewBox="0 0 100 100">
        <rect width="50" height="50" fill="pink" />
        <rect
          x="8"
          y="7"
          width="50"
          rx="2"
          height="50"
          stroke="black"
          stroke-width="3"
          fill="transparent"
        />
        <text x="12" y="26">
          P
        </text>
        <text x="28" y="40">
          F
        </text>
      </svg> */}
      <Contacts hide={hideContactsState} />
      <Songs />
      <About ref={aboutRef} />
    </>
  );
}
