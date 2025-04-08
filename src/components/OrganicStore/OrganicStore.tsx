import Organic1 from "/src/assets/Organic1.png";
import Organic2 from "/src/assets/Organic2.png";
import Organic3 from "/src/assets/Organic3.png";

const OrganicStore = (): React.ReactElement => {
  const cardData = [
    {
      image: Organic1,
      alt: "Product Comparison",
      title: "Product Comparison",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit vel mi nibh ullamcorper tincidunt. Enim eu donec elit facilisis ac nulla sed etiam mollis.",
      imageClass: "w-[269px] h-[104.5px]",
    },
    {
      image: Organic2,
      alt: "Eco-Friendliness",
      title: "Eco-Friendliness Score",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit vel mi nibh ullamcorper tincidunt. Enim eu donec elit facilisis ac nulla sed etiam mollis.",
      imageClass: "w-[206px] h-[105px]",
    },
    {
      image: Organic3,
      alt: "AI Suggestions",
      title: "AI-Powered Suggestions",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit vel mi nibh ullamcorper tincidunt. Enim eu donec elit facilisis ac nulla sed etiam mollis.",
      imageClass: "w-[107px] h-[155px]",
    },
  ];

  return (
    <div className="w-full bg-white py-20 px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-14">
        <p className="text-4xl md:text-5xl font-bold text-[#5f3a00] text-center">
          WELCOME TO OUR ORGANIC STORE!
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col w-full md:w-[303px] items-center gap-6 text-center"
            >
              <img
                src={card.image}
                alt={card.alt}
                className={`${card.imageClass} object-contain`}
              />
              <h3 className="text-xl font-semibold text-green-700">{card.title}</h3>
              <p className="text-gray-700 line-clamp-4">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganicStore;
