const Coming = (): React.ReactElement => {
    return (
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800">
            Coming Soon – Be the First to Join!
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            We’re working hard to bring <strong>Green Dukan</strong> to life.
            Our team is dedicated to creating an eco-friendly shopping platform that makes a difference.
            <br className="hidden sm:block" />
            Sign up for exclusive updates! Get early access to our launch, special discounts, and insider news on the best sustainable products.
          </p>
          <button className="mt-4 self-center bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full text-sm sm:text-base transition-all duration-300">
            Notify Me on Launch
          </button>
        </div>
      </section>
    );
  };
  
  export default Coming;
  