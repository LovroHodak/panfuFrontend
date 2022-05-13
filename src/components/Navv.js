import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";

export default function Navv() {
  //tell me on which page i am at
  const location = useLocation();
  //console.log(location.pathname);


  const navbarItems = [
    { name: "home", path: "/" },
    {
      name: "gallery",
      path: "/gallery",
      paths: ["/gallery/members", "/gallery/gig-2017"],
    },
    { name: "music", path: "/music" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <NavPanfu>
      <ul>
        {navbarItems.map((item, i) => {
          return (
            <li
              data-selected={
                item.path === location.pathname ||
                item.paths?.some((path) => path === location.pathname)
              }
              key={i}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </NavPanfu>
  );
}

const NavPanfu = styled.nav`
  color: white;
  height: 80px;
  padding: 16px;
  @media screen and (max-width: 464px) {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #000000bb;
    height: 20px;
    margin-bottom: 60px;
  }

  & > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 464px) {
      gap: 12px;
    }

    & > li {
      list-style: none;
      text-transform: uppercase;
      font-size: 1.5rem;
      opacity: 0.8;
      @media screen and (max-width: 464px) {
        font-size: 1rem;
      }

      & > a {
        color: white;
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    & > li[data-selected="true"] {
      font-weight: bolder;
      opacity: 1;
    }
  }
`;
