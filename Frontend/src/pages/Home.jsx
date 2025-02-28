// import React from 'react'
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
// import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
// import Leaderboard from "./home-sub-components/Leaderboard";


// const Home = () => {
//   const howItWorks = [
//     { title: "Post Items", description: "Auctioneer posts items for bidding." },
//     { title: "Place Bids", description: "Bidders place bids on listed items." },
//     {
//       title: "Win Notification",
//       description: "Highest bidder receives a winning email.",
//     },
//     {
//       title: "Payment & Fees",
//       description: "Bidder pays; auctioneer pays 5% fee.",
//     },
//   ];
//   const { isAuthenticated } = useSelector((state) => state.user);

//   return (    
// <>
// <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
// <div>
//     <p className="text-[#DECCBE] font-bold text-xl mb-8">
//             Transparency Leads to Your Victory
//           </p>
  
//           <h1
//             className={`text-[#111] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
//           >
//             Transparent Auctions
//           </h1>
//            <h1 className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
//           >
//             Be The Winner
//           </h1>
//           <div className="flex gap-4 my-8">
//             {!isAuthenticated && (
//               <>
//                 <Link
//                   to="/sign-up"
//                   className="bg-[#d6482b] font-semibold hover:bg-[#b8381e] rounded-md px-8 flex items-center py-2 text-white  transition-all duration-300"
//                 >
//                   Sign Up
//                 </Link>
//                 <Link
//                   to={"/login"}
//                   className="text-[#DECCBE] bg-transparent border-2 border-[#DECCBE] hover:bg-[#fff3fd] hover:text-[#fdba88] font-bold text-xl  rounded-md px-8 flex items-center py-2 transition-all duration-300"
//                 >
//                   Login
//                 </Link>
//               </>
//             )}
//           </div>

// </div>
// <div className="flex flex-col gap-6">
//           <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">How it works</h3>
//           <div className="flex flex-col gap-4 md:flex-row md:flex-wrap w-full">
//             {howItWorks.map((element) => {
//               return (
//                 <div
//                   key={element.title}
//                   className="bg-white flex flex-col gap-2 p-2 rounded-md h-[96px] justify-center md:w-[48%] lg:w-[47%] 2xl:w-[24%] hover:shadow-md transition-all duration-300"
//                 >
//                   <h5 className="font-bold">{element.title}</h5>
//                   <p>{element.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <FeaturedAuctions />
//         <UpcomingAuctions />
//         <Leaderboard />
// </section>
// </>
// )
// }

// export default Home;















import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiArrowRight, FiUsers, FiBarChart, FiAward, FiClock } from "react-icons/fi";
import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
import Leaderboard from "./home-sub-components/Leaderboard";

const Home = () => {
  const howItWorks = [
    { 
      title: "Post Items", 
      description: "Auctioneer posts items for bidding.",
      icon: <FiUsers className="w-6 h-6" />
    },
    { 
      title: "Place Bids", 
      description: "Bidders place bids on listed items.",
      icon: <FiBarChart className="w-6 h-6" />
    },
    {
      title: "Win Notification",
      description: "Highest bidder receives a winning email.",
      icon: <FiAward className="w-6 h-6" />
    },
    {
      title: "Payment & Fees",
      description: "Bidder pays; auctioneer pays 5% fee.",
      icon: <FiClock className="w-6 h-6" />
    },
  ];

  const stats = [
    { value: "1.2K+", label: "Live Auctions", color: "bg-red-600" },
    { value: "95%", label: "Success Rate", color: "bg-yellow-400" },
    { value: "4.8K+", label: "Total Users", color: "bg-blue-600" },
    { value: "500+", label: "Items Sold", color: "bg-green-500" },
  ];

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <section className="w-full min-h-screen px-5 pt-20 lg:pl-[320px] bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 space-y-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#d6482b] to-[#fdba88] p-8 text-white">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FiArrowRight className="animate-pulse" />
              Transparency Leads to Your Victory
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Transparent Auctions
              <span className="block text-[#DECCBE]">Be The Winner</span>
            </h1>
            <div className="flex gap-4 my-8">
              {!isAuthenticated && (
                <>
                  <Link
                    to="/sign-up"
                    className="bg-white text-[#d6482b] font-semibold rounded-full px-8 py-3 flex items-center gap-2 hover:bg-opacity-90 transition-all"
                  >
                    Sign Up
                    <FiArrowRight />
                  </Link>
                  <Link
                    to="/login"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#d6482b] font-semibold rounded-full px-8 py-3 transition-all"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
{stats.map((stat, index) => (
  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
    <div className={`${stat.color} w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 shadow-md`}> 
      <span className="text-2xl font-bold text-white">{stat.value}</span>
    </div>
    <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
  </div>
))}
</div>
        {/* How It Works Section */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-gray-800 text-center">
            How It Works
            <span className="block w-16 h-1 bg-[#d6482b] mx-auto mt-2"></span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((element, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all group"
              >
                <div className="mb-4 text-[#d6482b]">
                  {element.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {element.title}
                </h4>
                <p className="text-gray-600">{element.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Sections */}
        <FeaturedAuctions />
        <UpcomingAuctions />
        <Leaderboard />

        {/* CTA Section */}
        <div className="bg-[#d6482b] rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Bidding?</h2>
          <p className="mb-8 max-w-xl mx-auto">
            Join thousands of satisfied users participating in exciting auctions daily
          </p>
          <Link
            to={isAuthenticated ? "/auctions" : "/sign-up"}
            className="bg-white text-[#d6482b] px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-opacity-90 transition-all"
          >
            {isAuthenticated ? "Explore Auctions" : "Get Started"}
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;


