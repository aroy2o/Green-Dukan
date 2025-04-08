import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import imageLeft from "/src/assets/Download_premium_image_of_Plant_plant_backgrounds_leaf___by_Adjima_about_potted_plant__palm_tree__plant__light__and_tree_12907159-removebg-preview 1.png";
import imageRight from "/src/assets/Premium_Photo___Exotic_tropical_monstera_palm_leaves_at_home_-removebg-preview 1.png";

const ComingSoon = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen bg-[#f4f7f1] overflow-hidden font-sans">
      {/* Background images */}
      <img
        src={imageLeft}
        alt="Plant background left"
        className="absolute top-0 left-0 h-full w-[40%] object-cover"
      />
      <img
        src={imageRight}
        alt="Plant background right"
        className="absolute top-0 right-0 h-full w-[40%] object-cover"
      />

      {/* Content box */}
      <div className="relative z-10 mt-32 w-[90%] max-w-[990px] bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-10 md:p-16 text-center flex flex-col items-center gap-6 sm:gap-8 shadow-lg border border-green-100">
        <h1 className="text-transparent bg-gradient-to-r from-[#2f7b4f] via-[#4caf50] to-[#2f7b4f] bg-clip-text text-[40px] sm:text-[60px] md:text-[80px] font-extrabold leading-tight drop-shadow-[2px_2px_4px_rgba(47,123,79,0.4)] animate-pulse">
          Coming Soon
        </h1>
        <p className="text-lg sm:text-xl text-[#3c3c3c] max-w-[500px]">
          We’re cooking up something green and fresh for you. Stay tuned!
        </p>

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-[#2f7b4f] text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-[#256c42] transition font-medium shadow-md"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-base">Back to Home</span>
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
