import { RefreshCcw } from "lucide-react";
import imageLeft from "/src/assets/Download_premium_image_of_Plant_plant_backgrounds_leaf___by_Adjima_about_potted_plant__palm_tree__plant__light__and_tree_12907159-removebg-preview 1.png";
import imageRight from "/src/assets/Premium_Photo___Exotic_tropical_monstera_palm_leaves_at_home_-removebg-preview 1.png";
import { useNavigate } from "react-router-dom";

const InternalServerError500 = (): React.ReactElement => {
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

      {/* Error box */}
      <div className="relative z-10 mt-32 w-[90%] max-w-[990px] bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-10 md:p-16 text-center flex flex-col items-center gap-6 sm:gap-8 shadow-lg border border-green-100">
        {/* 500 Text */}
        <div className="text-transparent bg-gradient-to-r from-[#cc3300] via-[#ff6a00] to-[#cc3300] bg-clip-text text-[80px] sm:text-[120px] md:text-[180px] font-extrabold leading-none drop-shadow-[2px_2px_4px_rgba(204,51,0,0.4)] animate-pulse">
          500
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5f3a00]">Server Error</h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#cc3300]">Something Went Wrong</h1>
        <p className="text-base sm:text-lg text-[#3c3c3c] max-w-[500px]">
          Oops! Our server is having a little trouble. Please try refreshing the page or come back later.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-[#cc3300] text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-[#a62800] transition font-medium shadow-md"
        >
          <RefreshCcw className="w-5 h-5 animate-spin-slow" />
          <span className="text-base">Go to Home</span>
        </button>
      </div>
    </div>
  );
};

export default InternalServerError500;
