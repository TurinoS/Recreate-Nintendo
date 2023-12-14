"use client";

import { useState } from "react";
import styled from "styled-components";
import imageCarousel from "./imagesCarousel";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const CarouselContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
`;

export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <CarouselContainer>
      <Swiper
        modules={[Navigation, EffectCoverflow, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={1}
        navigation={true}
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
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress={true}
        spaceBetween={10}
        slidesPerView={6}
        className="mySwiper"
      >
        {imageCarousel.map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              src={src}
              alt={`Image ${i + 1}`}
              width={100}
              height={60}
              style={{ borderRadius: "12px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
}
