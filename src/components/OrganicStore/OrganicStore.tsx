
const OrganicStore = (): React.ReactElement => {
  return (
    <div className="w-full bg-white py-20 px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-14">
        <p className="text-4xl md:text-5xl font-bold text-[#5f3a00] text-center">
          WELCOME TO OUR ORGANIC STORE!
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          {/* Card 1 */}
          <div className="flex flex-col w-full md:w-[303px] items-center gap-6 text-center">
            <img
              className="w-[269px] h-[104.5px] object-contain"
              alt="Product Comparison"
              src="src/assets/Organic1.png"
            />
            <h3 className="text-xl font-semibold text-green-700">Product Comparison</h3>
            <p className="text-gray-700 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur. Sit vel mi nibh
              ullamcorper tincidunt. Enim eu donec elit facilisis ac nulla sed
              etiam mollis.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col w-full md:w-[303px] items-center gap-6 text-center">
            <img
              className="w-[206px] h-[105px] object-contain"
              alt="Eco-Friendliness"
              src="src/assets/Organic2.png"
            />
            <h3 className="text-xl font-semibold text-green-700">Eco-Friendliness Score</h3>
            <p className="text-gray-700 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur. Sit vel mi nibh
              ullamcorper tincidunt. Enim eu donec elit facilisis ac nulla sed
              etiam mollis.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col w-full md:w-[303px] items-center gap-6 text-center">
            <img
              className="w-[107px] h-[155px] object-contain"
              alt="AI Suggestions"
              src="src/assets/Organic3.png"
            />
            <h3 className="text-xl font-semibold text-green-700">AI-Powered Suggestions</h3>
            <p className="text-gray-700 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur. Sit vel mi nibh
              ullamcorper tincidunt. Enim eu donec elit facilisis ac nulla sed
              etiam mollis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicStore;
