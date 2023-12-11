"use client";

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

import { PropsWithChildren } from "react";
import styled from "styled-components";

type CarouselProps = PropsWithChildren & EmblaOptionsType;

const StyledCarousel = styled.div`
  overflow: hidden;
  border-radius: 24px;

  & div {
    display: flex;
  }
`;

export default function Carousel({ children, ...options }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <StyledCarousel ref={emblaRef}>
      <div>{children}</div>
    </StyledCarousel>
  );
}
