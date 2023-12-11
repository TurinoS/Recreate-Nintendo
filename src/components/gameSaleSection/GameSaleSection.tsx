"use client";

import styled from "styled-components";
import UserJourney from "./UserJourney";
import Carousel from "../carousel/Carousel";

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

const GameInfo = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 10px;
`;

const SaleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function GameSaleSection() {
  return (
    <GameSection>
      <UserJourney />
      <GameInfo>
        <Carousel />
        <SaleContainer>
          <h1>Valley</h1>
          <h2>price 14 euros</h2>
        </SaleContainer>
      </GameInfo>
    </GameSection>
  );
}
