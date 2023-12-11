"use client";

import { useEffect } from "react";
import styled from "styled-components";
import imageCarousel from "../carousel/imagesCarousel";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";

const CarouselContainer = styled.div`
  border-radius: 24px;
  overflow: hidden;
`;

export default function Carousel() {
  return (
    <CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        speed={1000}
        effect="coverflow"
        loop
      >
        {imageCarousel.map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              src={src}
              alt={`Image ${i + 1}`}
              width={626}
              height={370}
              style={{ borderRadius: "24px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
}
