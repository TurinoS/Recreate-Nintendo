"use client";

import Image from "next/image";
import logo from "../../public/nintendo-logo.jpg";
import styled from "styled-components";
import SearchInput from "./SearchInput";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background: var(--white);

  & div {
    display: flex;
    align-items: center;
    gap: 2em;
  }
`;

const NavbarList = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 5em;

  & ul {
    list-style: none;
    display: flex;
    gap: 2em;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <a href="/">
          <Image src={logo} alt="Nintendo logo" width={105} height={52} />
        </a>
        <SearchInput />
      </div>
      <NavbarList>
        <ul>
          <li>oi</li>
          <li>oi</li>
          <li>oi</li>
        </ul>
      </NavbarList>
    </StyledHeader>
  );
}
