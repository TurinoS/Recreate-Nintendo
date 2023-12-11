"use client";

import styled from "styled-components";
import UserJourney from "./UserJourney";
import Carousel from "../carousel/Carousel";
import Image from "next/image";
import imagesCarousel from "../carousel/imagesCarousel";

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

const CarouselSlide = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function GameSaleSection() {
  return (
    <GameSection>
      <UserJourney />
      <Carousel loop>
        {imagesCarousel.map((src, i) => (
          <CarouselSlide key={i}>
            <Image src={src} alt={`Image ${i + 1}`} width={640} height={427} />
          </CarouselSlide>
        ))}
      </Carousel>
    </GameSection>
  );
}
