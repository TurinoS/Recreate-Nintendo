"use client";

import styled from "styled-components";
import OpenTabButton from "./OpenTabButton";
import { GiRetroController, GiRoundStar } from "react-icons/gi";
import { SiNintendoswitch } from "react-icons/si";
import { MdChat } from "react-icons/md";
import { HiBuildingStorefront } from "react-icons/hi2";
import HeaderLink from "./HeaderLink";

const StyledSubNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  padding: 10px;
  border-top: 1px solid var(--light-gray);
  border-bottom: 1px solid var(--light-gray);

  & ul {
    list-style: none;
    display: flex;
    gap: 28px;

    & li {
      display: flex;
      align-items: center;
    }
  }
`;

export default function SubNavbar() {
  return (
    <StyledSubNavbar>
      <ul>
        <li>
          <OpenTabButton>
            <HiBuildingStorefront />
            My Nintendo Store
          </OpenTabButton>
        </li>
        <li>
          <OpenTabButton>
            <GiRetroController />
            Games
          </OpenTabButton>
        </li>
        <li>
          <OpenTabButton>
            <SiNintendoswitch />
            Nintendo Switch
          </OpenTabButton>
        </li>
        <li>
          <HeaderLink href="#">
            <MdChat />
            News and events
          </HeaderLink>
        </li>
        <li>
          <OpenTabButton>
            <GiRoundStar />
            Play Nintendo
          </OpenTabButton>
        </li>
      </ul>
    </StyledSubNavbar>
  );
}
