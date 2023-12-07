"use client";

import styled from "styled-components";
import {
  MdLiveHelp,
  MdShoppingCart,
  MdFavorite,
  MdPerson,
} from "react-icons/md";
import flag from "../../../public/american-flag-icon.png";
import Image from "next/image";

const NavbarList = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 1em;

  & ul {
    list-style: none;
    display: flex;
    gap: 1em;

    & li {
      display: flex;
      align-items: center;
      gap: 4px;

      & svg {
        font-size: 24px;
      }
    }
  }

  & a {
    text-decoration: none;
    color: var(--gray);

    &:hover {
      color: var(--red);
      transition: 500ms;
    }
  }
`;

export default function Navbar() {
  return (
    <NavbarList>
      <ul>
        <a href="#">
          <li>
            <MdLiveHelp />
            Support
          </li>
        </a>
        <a href="#">
          <li>
            <MdFavorite />
            Wish List
          </li>
        </a>
        <a href="#">
          <li>
            <MdShoppingCart />
            Cart
          </li>
        </a>
        <a href="#">
          <li>
            <MdPerson />
            Log in / Sign up
          </li>
        </a>
        <a href="#">
          <li>
            <Image src={flag} alt="Language - english" width={30} />
          </li>
        </a>
      </ul>
    </NavbarList>
  );
}
