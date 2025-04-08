
export default function OurMission() {
  // Data for the "What We Offer" section
  const offerings = [
    {
      title: "Biodegradable & Compostable Goods",
      description: " – Say goodbye to single-use plastic with our eco-friendly alternatives.",
    },
    {
      title: "Reusable & Zero-Waste Essentials",
      description: " – From kitchenware to personal care, our products help you reduce waste.",
    },
    {
      title: "Sustainable Home & Lifestyle Products",
      description: " – Thoughtfully designed for a greener way of living.",
    },
    {
      title: "Organic & Natural Products",
      description: " – Free from harmful chemicals, safe for you and the planet.",
    },
    {
      title: "Ethically Sourced & Fair Trade Items",
      description: " – Supporting artisans and responsible brands.",
    },
  ];

  // Data for the "Why Choose Green Dukan?" section
  const reasons = [
    {
      title: "Eco-Friendly & Sustainable",
      description: " – All our products are made from natural, biodegradable, and recycled materials.",
    },
    {
      title: "Quality You Can Trust",
      description: " – We ensure that every item is durable, safe, and effective.",
    },
    {
      title: "Affordable Green Living",
      description: " – Sustainability shouldn't be expensive. We keep our prices competitive.",
    },
    {
      title: "Ethically & Responsibly Sourced",
      description: " – We partner with brands that share our values.",
    },
    {
      title: "Convenience Without Compromise",
      description: " – Our carefully curated selection makes it easy to switch to greener alternatives.",
    },
  ];

  return (
    <main className="bg-white w-full">
      <section className="max-w-[1200px] mx-auto py-[60px] px-4 flex flex-col items-center gap-[55px]">

        {/* About Us Section */}
        <div className="w-full">
          <div className="p-0 flex flex-col gap-4">
            <h1 className="text-[34px] font-semibold text-green-800 leading-normal">About Us</h1>
            <p className="text-[20px] text-black leading-[35px]">
              In a world where environmental concerns are growing every day, we believe that small, conscious choices can create a big impact.
              That&apos;s why we are dedicated to bringing you a carefully curated collection of sustainable alternatives—helping you reduce waste,
              minimize plastic consumption, and adopt an eco-conscious lifestyle effortlessly.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="w-full">
          <div className="p-0 flex flex-col lg:flex-row justify-between items-center gap-[54px]">
            <img
              className="w-[590px] h-[590px] object-cover"
              alt="Sustainable products with plants"
              src="src/assets/Misson1.png"
            />
            <div className="flex flex-col gap-4 max-w-[556px]">
              <h2 className="text-[24px] font-semibold text-green-800 leading-normal">Our Mission</h2>
              <p className="text-[16px] text-black leading-[35px]">
                At Green Dukan, our mission is to create a sustainable future by making eco-friendly products more accessible and affordable.
                We aim to empower individuals, families, and businesses to make greener choices without compromising on convenience or quality.
                <br /><br />
                Every product we offer is chosen with sustainability, ethical sourcing, and environmental impact in mind.
                We are committed to promoting a circular economy where waste is minimized, and resources are used responsibly.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="w-full">
          <div className="p-0 flex flex-col lg:flex-row justify-between items-center gap-[54px]">
            <div className="flex flex-col gap-4 max-w-[556px]">
              <h2 className="text-[24px] font-semibold text-green-800 leading-normal">What We Offer</h2>
              <div className="text-[16px] leading-[35px] text-[#3b3b3b]">
                <p>
                  We are working tirelessly to build a diverse range of eco-conscious products, including:
                  <br /><br />
                </p>
                <ul className="space-y-1">
                  {offerings.map((item, index) => (
                    <li key={index}>
                      <span className="font-semibold">{item.title}</span>
                      <span>{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <img
              className="w-[590px] h-[590px] object-cover"
              alt="Sustainable products and materials"
              src="src/assets/Mission2.png"
            />
          </div>
        </div>

        {/* Why Choose Green Dukan? Section */}
        <div className="w-full">
          <div className="p-0 flex flex-col lg:flex-row justify-between items-center gap-[54px]">
            <img
              className="w-[590px] h-[590px] object-cover"
              alt="Hands holding eco-friendly puzzle pieces"
              src="src/assets/Mission3.png"
            />
            <div className="flex flex-col gap-4 max-w-[556px]">
              <h2 className="text-[24px] font-semibold text-green-800 leading-normal">Why Choose Green Dukan?</h2>
              <ul className="text-[16px] leading-[35px] text-black">
                {reasons.map((item, index) => (
                  <li key={index}>
                    <span className="font-semibold">{item.title}</span>
                    <span>{item.description}</span>
                    <br />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        

      </section>
    </main>
  );
}
