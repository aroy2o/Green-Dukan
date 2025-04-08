import { Leaf } from "lucide-react";

export default function AboutUsSort() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-[1200px] mx-auto bg-transparent">
        <div className="flex flex-col items-center gap-5 p-6 rounded-lg shadow-none">
          <h2 className="text-[34px] font-semibold text-center text-green-800">
            Welcome To Green Dukan!
          </h2>

          <div className="flex items-center gap-5">
            <div className="w-[106px] h-[3px] bg-green-800 rounded-full" />
            <Leaf className="w-[30px] h-[30px] text-green-800" />
            <div className="w-[106px] h-[3px] bg-green-800 rounded-full" />
          </div>

          <p className="max-w-[953px] text-[20px] text-black text-center leading-[35px]">
            Your trusted destination for sustainable, eco-friendly, and ethically sourced products. We are on a mission to make green living simple, accessible, and affordable for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
