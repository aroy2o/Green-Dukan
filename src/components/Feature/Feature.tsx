// components/Feature.tsx
const Feature: React.FC = () => {
  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="max-w-screen-xl mt-15 mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Text */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 flex items-center gap-2">
            <span role="img" aria-label="leaf">🌿</span> Features That Make Green Dukan Unique
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At Green Dukan, we believe sustainable shopping should be easy, affordable, and impactful. Our platform offers eco-friendly alternatives for everyday essentials, ensuring your choices help protect the planet without sacrificing convenience or quality.
          </p>
        </div>

        {/* Right Side - Video Circle */}
        <div className="mt-10 md:mt-0">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-white overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/eco-friendly-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--ecology-environment-nature-green-energy-pack-icons-7980604.mp4" // Replace with your video path
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
