import React from "react";
import {
  FaUser,
  FaGavel,
  FaEnvelope,
  FaDollarSign,
  FaFileInvoice,
  FaRedo,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUser className="w-6 h-6" />,
      title: "User Registration",
      description:
        "Users must register or log in to perform operations such as posting auctions, bidding on items, accessing the dashboard, and sending payment proof.",
    },
    {
      icon: <FaGavel className="w-6 h-6" />,
      title: "Role Selection",
      description:
        'Users can register as either a "Bidder" or "Auctioneer." Bidders can bid on items, while Auctioneers can post items.',
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Winning Bid Notification",
      description:
        "After winning an item, the highest bidder will receive an email with the Auctioneer's payment method information, including bank transfer, Easypaisa, and PayPal.",
    },
    {
      icon: <FaDollarSign className="w-6 h-6" />,
      title: "Commission Payment",
      description:
        "If the Bidder pays, the Auctioneer must pay 5% of that payment to the platform. Failure to pay results in being unable to post new items, and a legal notice will be sent.",
    },
    {
      icon: <FaFileInvoice className="w-6 h-6" />,
      title: "Proof of Payment",
      description:
        "The platform receives payment proof as a screenshot and the total amount sent. Once approved by the Administrator, the unpaid commission of the Auctioneer will be adjusted accordingly.",
    },
    {
      icon: <FaRedo className="w-6 h-6" />,
      title: "Reposting Items",
      description:
        "If the Bidder does not pay, the Auctioneer can republish the item without any additional cost.",
    },
  ];

  return (
    <section className="w-full min-h-screen px-5 pt-20 lg:pl-[320px] bg-gray-50">
      <div className="max-w-6xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#d6482b] mb-4 relative pb-4">
            How PrimeBid Operates
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-[#d6482b] rounded-full"></span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A step-by-step guide to understanding our auction process and platform operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((element, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#d6482b] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#d6482b]/10 p-4 rounded-full">
                  <span className="text-[#d6482b]">{element.icon}</span>
                </div>
                <span className="text-2xl font-bold text-gray-400">0{index + 1}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {element.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {element.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#d6482b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#b53a22] transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
            <FaUser className="w-5 h-5" />
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;