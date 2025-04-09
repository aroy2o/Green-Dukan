import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Testimonials from "/src/assets/testimonial .png"

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  avatar: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote: "Lorem ipsum dolor sit amet consectetur...",
    name: "Jane Doe",
    designation: "CEO, EcoWorld",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "GreenDukan has transformed how we view sustainability...",
    name: "John Smith",
    designation: "Founder, NatureTech",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    quote: "Highly recommend GreenDukan! It’s not just a platform...",
    name: "Emily Stone",
    designation: "Eco Activist",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const TestimonialCard: React.FC<TestimonialItem> = ({
  quote,
  name,
  designation,
  avatar,
}) => (
  <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md flex flex-col justify-between gap-6 transition-all duration-300">
    <div className="text-[#157347] text-4xl font-bold leading-none">“</div>
    <p className="text-[#3C3C3C] font-medium leading-relaxed text-[15px] sm:text-base">
      {quote}
    </p>
    <div className="flex items-center gap-4 mt-4">
      <img src={avatar} alt={`${name}'s Avatar`} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <div className="text-[#1C1C1C] font-semibold">{name}</div>
        <div className="text-[#157347] text-sm italic">{designation}</div>
      </div>
    </div>
  </div>
);

export const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialCount = testimonials.length;

  const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonialCount);
  const prevTestimonial = () => setActiveIndex((prev) => (prev === 0 ? testimonialCount - 1 : prev - 1));
  const handleDotClick = (index: number) => setActiveIndex(index);

  // Auto-slide for mobile only
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextTestimonial,
    onSwipedRight: prevTestimonial,
    trackMouse: true,
  });

  return (
    <section
      className="w-full bg-cover bg-center py-20 px-4"
      style={{ backgroundImage: `url(${Testimonials})` }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
          What Our Testimonials Say
        </h2>

        {/* Large screens - show all 3 cards */}
        <div className="hidden md:flex justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Small screens - swipe only, no nav arrows */}
        <div className="md:hidden relative flex justify-center items-center" {...swipeHandlers}>
          <div className="w-full max-w-sm mx-auto">
            <TestimonialCard {...testimonials[activeIndex]} />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-white scale-110" : "bg-white opacity-40"
              }`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
