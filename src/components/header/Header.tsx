"use client";

import Image from "next/image";
import logo from "../../../public/nintendo-logo.jpg";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background: var(--white);
  font-weight: 600;

  & div {
    display: flex;
    align-items: center;
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
      <Navbar />
    </StyledHeader>
  );
}
