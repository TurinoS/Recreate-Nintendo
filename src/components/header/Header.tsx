"use client";

import Image from "next/image";
import logo from "../../../public/nintendo-logo.jpg";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--white);
  font-weight: 600;
  max-height: 49px;

  & div {
    display: flex;
    align-items: center;
    gap: 2em;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <TopHeader>
        <div>
          <a href="/">
            <Image src={logo} alt="Nintendo logo" width={105} height={52} />
          </a>
          <SearchInput />
        </div>
        <Navbar />
      </TopHeader>
      <SubNavbar />
    </StyledHeader>
  );
}
