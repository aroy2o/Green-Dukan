import { useState } from "react";
import fimg1 from "/src/assets/fimg1.png";
import fimg2 from "/src/assets/fimg2.png";

interface Feature {
  title: string;
  shortDescription: string;
  detailedDescription: string[];
  image: string;
}

const features: Feature[] = [
  {
    title: "100% Eco-Friendly & Sustainable Products",
    shortDescription: "Every item available on Green Dukan meets the highest environmental and ethical standards",
    detailedDescription: [
      `Biodegradable or Recyclable – Designed to decompose naturally or be repurposed.`,
      `Plastic-Free or Reduced Plastic – Helping you cut down on single-use plastic waste.`,
      `Non-Toxic & Chemical-Free – Safe for you and the environment.`,
      `Cruelty-Free & Vegan Options – Ensuring ethical production practices.`,
      `Locally Sourced & Fair Trade – Supporting ethical labor and responsible businesses.`,
    ],
    image: fimg1,
  },
  {
    title: "Zero-Waste & Plastic-Free Shopping Experience",
    shortDescription: "We are committed to reducing waste and promoting a circular economy",
    detailedDescription: [
      `Plastic-free alternatives – From reusable bags to compostable utensils.`,
      `Refillable & Bulk Buying Options – Reduce waste and save money.`,
      `Compostable or Recyclable Packaging – No unnecessary plastic wrapping.`,
      `Upcycled & Recycled Products – Giving new life to old materials.`,
    ],
    image: fimg2,
  },
  {
    title: "Ethical & Responsible Sourcing",
    shortDescription: "Every product on Green Dukan is sourced responsibly from brands and artisans who follow sustainable practices",
    detailedDescription: [
      `Follow fair trade practices – Ensuring ethical wages and working conditions`,
      `Use sustainable materials – Avoiding deforestation, pollution, and harmful practices`,
      `Support local communities – Partnering with small-scale, eco-conscious businesses.`,
    ],
    image: fimg1,
  },
  {
    title: "Wide Range of Sustainable Product Categories",
    shortDescription: "Green Dukan provides eco-friendly alternatives across multiple categories",
    detailedDescription: [
      `Home & Kitchen – Bamboo utensils, compost bins, glass storage containers.`,
      `Personal Care & Hygiene – Organic soaps, bamboo toothbrushes, reusable cotton pads.`,
      `Reusable & Zero-Waste Essentials – Cloth shopping bags, stainless steel bottles, eco-friendly lunch boxes.`,
      `Eco-Friendly Cleaning Solutions – Non-toxic detergents, biodegradable sponges, refillable cleaners.`,
      `Office & Stationery – Recycled notebooks, plantable seed pens, compostable packaging.`,
      `Sustainable Fashion & Accessories – Organic cotton clothing, hemp bags, cork wallets.`
    ],
    image: fimg1,
  },
  {
    title: "Hassle-Free, Eco-Conscious Shopping Experience",
    shortDescription: "We make sustainable living easy with our user-friendly platform",
    detailedDescription: [
      `User-Friendly Navigation & Search – Quickly find eco-friendly alternatives.`,
      `Sustainability Ratings & Certifications – Transparency on environmental impact.`,
      `Eco-Friendly Packaging & Shipping – Orders delivered in biodegradable or recyclable materials.`,
      `Affordable Green Alternatives – Competitive pricing for sustainability.`,
      `Easy Checkout & Secure Payments – Smooth, hassle-free transactions.`,
    ],
    image: fimg1,
  },
  {
    title: "Learn & Grow With Green Dukan",
    shortDescription: "We empower our customers with knowledge and resources",
    detailedDescription: [
      `Eco-Friendly Living Guides – Simple steps to reduce your carbon footprint.`,
      `Sustainability News & Innovations – Stay updated with the latest trends in green living.`,
      `Community & Engagement – Join a network of like-minded individuals passionate about sustainability.`,
    ],
    image: fimg1,
  },
];

const FeaturesDetail: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDetail = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-8 max-w-screen-xl mx-auto">
      {features.map((feature, idx) => {
        const isActive = activeIndex === idx;

        return (
          <div
            key={idx}
            className="relative h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200 group hover:scale-105 transition-transform duration-500 cursor-pointer"
            onClick={() => toggleDetail(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleDetail(idx)}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110"
            />

            {/* Short Description Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black via-transparent p-6 text-white flex flex-col justify-end transition-opacity duration-500 z-10 ${
                isActive ? "opacity-0" : "opacity-100 md:group-hover:opacity-0"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">{feature.title}</h3>
              <p className="text-sm md:text-base drop-shadow">{feature.shortDescription}</p>
            </div>

            {/* Detailed Description Overlay */}
            <div
              className={`absolute inset-0 bg-white/90 backdrop-blur-md p-6 overflow-y-auto transition-opacity duration-500 z-20 ${
                isActive ? "opacity-100 pointer-events-auto" : "opacity-0 md:group-hover:opacity-100 md:pointer-events-auto pointer-events-none"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 text-green-800">{feature.title}</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-2">
                {feature.detailedDescription.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesDetail;
