"use client";

import styled from "styled-components";
import UserJourney from "./UserJourney";

const GameSection = styled.section`
  width: 1140px;
  height: 590px;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 24px;
  z-index: 2;
  padding: 32px 48px;
  position: relative;
  top: 50px;
  box-shadow: 0px 4px 16px 0px var(--gray);
`;

export default function GameSaleSection() {
  return (
    <GameSection>
      <UserJourney />
    </GameSection>
  );
}
