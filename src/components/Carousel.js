import { useState, useEffect } from "react";
import { imgCarousel } from "../api/imgCarousel";

export default function Carousel({
  autoSlide = true,
  autoSlideInterval = 4000,
}) {
  const [curr, setCurr] = useState(0);

  // const prev = () =>
  //   setCurr((curr) => (curr === 0 ? imgCarousel.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === imgCarousel.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="overflow-hidden relative w-screen h-44">
      <div
        className="flex transition-transform ease-out duration-500 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {imgCarousel.map((s, index) => (
          <img
            key={index}
            className="object-cover w-full h-44 rounded-xl mr-1"
            src={s}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    </div>
  );
}