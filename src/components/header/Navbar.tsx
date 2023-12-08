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
import HeaderLink from "./HeaderLink";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 1em;

  & ul {
    list-style: none;
    display: flex;
    gap: 1em;

    & svg {
      font-size: 24px;
    }
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <HeaderLink href="#">
            <MdLiveHelp />
            Support
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="#">
            <MdFavorite />
            Wish List
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="#">
            <MdShoppingCart />
            Cart
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="#">
            <MdPerson />
            Log in / Sign up
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="#">
            <Image src={flag} alt="Language - english" width={30} />
          </HeaderLink>
        </li>
      </ul>
    </StyledNavbar>
  );
}
