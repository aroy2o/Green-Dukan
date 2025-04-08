import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Reward() {
  const navigate = useNavigate();

  const rewardsData = {
    title: "Rewards & Subscribe now",
    claimCard: {
      title: "Claim Rewards",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit velLorem ipsum Lorem ipsum dolor sit amet consectetur.",
      buttonText: "Claim reward",
    },
    subscribeCard: {
      title: "Subscribe now and get rewards",
      description:
        "Sign up for the shop Organic newsletter and get the latest organic info & save with special subscriber discounts. Sign up today!",
      placeholder: "User@email.com",
    },
  };

  const handleClaimClick = () => {
    navigate("/comingsoon");
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col gap-9">
          <h2 className="text-[34px] font-semibold text-[#5f3a00]">
            {rewardsData.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Claim Rewards Card */}
            <div
              className="rounded-[10px] overflow-hidden h-[300px] bg-cover bg-center flex items-center justify-center p-8"
              style={{ backgroundImage: `url('src/assets/RL.png')` }}
            >
              <div className="flex flex-col items-center text-center gap-6 max-w-[456px]">
                <h3 className="text-[24px] font-semibold text-white">
                  {rewardsData.claimCard.title}
                </h3>
                <p className="text-[16px] text-white leading-[30px]">
                  {rewardsData.claimCard.description}
                </p>
                <button
                  onClick={handleClaimClick}
                  className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-[10px] text-[16px] transition"
                >
                  {rewardsData.claimCard.buttonText}
                </button>
              </div>
            </div>

            {/* Subscribe Card */}
            <div
              className="rounded-[10px] overflow-hidden h-[300px] bg-cover bg-center flex items-center justify-center p-8"
              style={{ backgroundImage: `url('src/assets/RR.png')` }}
            >
              <div className="flex flex-col items-center text-center gap-6 max-w-[456px]">
                <h3 className="text-[24px] font-semibold text-white">
                  {rewardsData.subscribeCard.title}
                </h3>
                <p className="text-sm text-white leading-[30px]">
                  {rewardsData.subscribeCard.description}
                </p>
                <div className="relative w-full max-w-[318px]">
                  <input
                    type="email"
                    placeholder={rewardsData.subscribeCard.placeholder}
                    className="w-full h-[50px] pl-[30px] pr-[60px] rounded-[30px] text-sm bg-white placeholder:text-black opacity-70 focus:outline-none"
                  />
                  <button
                    className="absolute right-0 top-0 w-[50px] h-[50px] bg-green-700 hover:bg-green-800 text-white rounded-[30px] flex items-center justify-center transition"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
