import { WifiOff } from "lucide-react";
import imageLeft from "/src/assets/Download_premium_image_of_Plant_plant_backgrounds_leaf___by_Adjima_about_potted_plant__palm_tree__plant__light__and_tree_12907159-removebg-preview 1.png";
import imageRight from "/src/assets/Premium_Photo___Exotic_tropical_monstera_palm_leaves_at_home_-removebg-preview 1.png";

const OfflineNotice = (): React.ReactElement => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[#f4f7f1] overflow-hidden font-sans">
      {/* Background images */}
      <img
        src={imageLeft}
        alt="Plant left"
        className="absolute top-0 left-0 h-full w-[40%] object-cover opacity-80"
      />
      <img
        src={imageRight}
        alt="Plant right"
        className="absolute top-0 right-0 h-full w-[40%] object-cover opacity-80"
      />

      {/* Offline Message Box */}
      <div className="relative z-10 w-[90%] max-w-[900px] bg-white/80 backdrop-blur-md border border-green-100 shadow-lg rounded-2xl p-6 sm:p-10 md:p-16 text-center flex flex-col items-center gap-6 animate-fadeIn">
        <div className="animate-wiggle">
          <WifiOff className="w-20 h-20 text-[#2f7b4f] drop-shadow-md" />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2f7b4f]">
          You're Offline!
        </h1>

        <p className="text-base sm:text-lg text-[#3c3c3c] max-w-[500px]">
          It looks like your internet connection has gone on a nature walk. Please reconnect to continue shopping for your favorite green goodies.
        </p>

        <div className="text-sm text-[#777] italic">
          Don’t worry, we’ll wait patiently like a sunflower turning to the sun 🌻
        </div>
      </div>
    </div>
  );
};

export default OfflineNotice;
