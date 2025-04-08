import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Banner from "/src/assets/Banner.png"; // Adjust the path as necessary
// Slide data
const slides = [
  {
    image : Banner, // assuming image is in public
    title: (
      <>
        <span className="text-[#0f7538]">GREEN </span>
        <span className="text-[#5f3a00]">for a <br /></span>
        <span className="text-[#5f3a00]">Better Tomorrow</span>
      </>
    ),
    description: "Shop eco-friendly products that make a difference for our planet.",
    buttonText: "Coming Soon...",
  },
  {
    image: Banner,
    title: (
      <>
        <span className="text-[#0f7538]">SUSTAIN </span>
        <span className="text-[#5f3a00]">the <br /></span>
        <span className="text-[#5f3a00]">Green Legacy</span>
      </>
    ),
    description: "Support products that support Earth. A better choice starts here.",
    buttonText: "Explore Now",
  },
];

const HeroCarousel = (): React.ReactElement => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSwipe = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % slides.length),
    onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length),
    preventScrollOnSwipe: true, // ✅ Correct property
    trackMouse: true,
  });

  const slide = slides[currentSlide];

  return (
    <div
      {...handleSwipe}
      className="relative w-full h-[90vh] max-h-[825px] overflow-hidden mt-14"
    >
      {/* Slide background */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-10 md:px-20 lg:px-32">
          <div className="flex flex-col gap-6 md:gap-10 max-w-xl p-4 sm:p-6 md:p-8 rounded-lg ">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold font-sans text-[clamp(2rem,5vw,4.5rem)] leading-tight">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg text-black">{slide.description}</p>
            </div>
            <button className="px-4 py-4 bg-green-700 text-white text-base rounded-lg shadow hover:bg-green-800 transition cursor-pointer">
              {slide.buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-green-800" : "bg-green-300"
            } transition`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
