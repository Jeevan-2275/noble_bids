// import Spinner from "@/custom-components/Spinner";
// import React from "react";
// import { useSelector } from "react-redux";

// const Leaderboard = () => {
//   const { loading, leaderboard } = useSelector((state) => state.user);
//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
//         {loading ? (
//           <Spinner />
//         ) : (
//           <>
//             <div className="flex flex-col min-[340px]:flex-row min-[340px]:gap-2 mb-5">
//               <h1
//                 className={`text-[#D6482B] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
//               >
//                 Bidders Leaderboard
//               </h1>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="min-w-full bg-white border my-5 border-gray-300">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-4 text-left">Profile Pic</th>
//                     <th className="py-2 px-4 text-left">username</th>
//                     <th className="py-2 px-4 text-left">Bid Expenditure</th>
//                     <th className="py-2 px-4 text-left">Auctions Won</th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-gray-700">
//                   {leaderboard.slice(0, 100).map((element, index) => {
//                     return (
//                       <tr
//                         key={element._id}
//                         className="border-b border-gray-300"
//                       >
//                         <td className="flex gap-2 items-center py-2 px-4">
//                           <span className="text-stone-400 font-semibold text-xl w-7 hidden sm:block">
//                             {index + 1}
//                           </span>
//                           <span>
//                             <img
//                               src={element.profileImage?.url}
//                               alt={element.username}
//                               className="h-12 w-12 object-cover rounded-full"
//                             />
//                           </span>
//                         </td>
//                         <td className="py-2 px-4">{element.username}</td>
//                         <td className="py-2 px-4">{element.moneySpent}</td>
//                         <td className="py-2 px-4">{element.auctionsWon}</td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </>
//         )}
//       </section>
//     </>
//   );
// };

// export default Leaderboard;
































import Spinner from "@/custom-components/Spinner";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaCrown, FaRupeeSign } from "react-icons/fa"; // Add FaRupeeSign
import {  FiAward, FiTrendingUp } from "react-icons/fi"; // Feather Icons

const Leaderboard = () => {
  const { loading, leaderboard } = useSelector((state) => state.user);
  const [sortConfig, setSortConfig] = useState({ 
    key: 'moneySpent', 
    descending: true 
  });

  // Sort leaderboard data
  const sortedLeaderboard = [...leaderboard].sort((a, b) => {
    if (sortConfig.descending) {
      return b[sortConfig.key] - a[sortConfig.key];
    }
    return a[sortConfig.key] - b[sortConfig.key];
  });

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      descending: prev.key === key ? !prev.descending : true
    }));
  };

  const getMedalColor = (index) => {
    if (index === 0) return 'bg-gradient-to-r from-yellow-400 to-yellow-500';
    if (index === 1) return 'bg-gradient-to-r from-gray-400 to-gray-500';
    if (index === 2) return 'bg-gradient-to-r from-amber-600 to-amber-700';
    return 'bg-gray-100';
  };

  return (
    <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {loading ? (
        <Spinner />
      ) : (
        <div className="max-w-7xl mx-auto w-full py-8">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#D6482B] to-orange-600 bg-clip-text text-transparent">
              <FaCrown className="inline-block mr-4 mb-2" />
              Bidders Leaderboard
            </h1>
            
            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-white p-4 rounded-xl shadow-md flex-1 min-w-[200px] transition-transform hover:scale-105">
                <div className="flex items-center gap-2 mb-2">
                  <FiTrendingUp className="text-2xl text-[#D6482B]" />
                  <h3 className="text-gray-500 text-sm">Total Participants</h3>
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  {leaderboard.length}
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md flex-1 min-w-[200px] transition-transform hover:scale-105">
                <div className="flex items-center gap-2 mb-2">
                  <FaRupeeSign  className="text-2xl text-green-500" />
                  <h3 className="text-gray-500 text-sm">Total Bids</h3>
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  ₹{leaderboard.reduce((sum, user) => sum + user.moneySpent, 0).toLocaleString()}
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md flex-1 min-w-[200px] transition-transform hover:scale-105">
                <div className="flex items-center gap-2 mb-2">
                  <FiAward className="text-2xl text-yellow-500" />
                  <h3 className="text-gray-500 text-sm">Auctions Won</h3>
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  {leaderboard.reduce((sum, user) => sum + user.auctionsWon, 0)}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Leaderboard Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-[#D6482B] to-orange-600 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Rank</th>
                    <th className="py-4 px-6 text-left">Bidder</th>
                    <th 
                      className="py-4 px-6 text-left cursor-pointer hover:bg-orange-700 transition-colors"
                      onClick={() => handleSort('moneySpent')}
                    >
                      <div className="flex items-center gap-2">
                        Bid Expenditure
                        <FaRupeeSign  className={`transition-transform ${sortConfig.key === 'moneySpent' ? 'scale-125' : ''}`} />
                      </div>
                    </th>
                    <th 
                      className="py-4 px-6 text-left cursor-pointer hover:bg-orange-700 transition-colors"
                      onClick={() => handleSort('auctionsWon')}
                    >
                      <div className="flex items-center gap-2">
                        Auctions Won
                        <FiAward className={`transition-transform ${sortConfig.key === 'auctionsWon' ? 'scale-125' : ''}`} />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-200">
                  {sortedLeaderboard.slice(0, 100).map((element, index) => (
                    <motion.tr
                      key={element._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-6">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${getMedalColor(index)}`}> 
                          <span className={`font-semibold ${index < 3 ? 'text-white' : 'text-gray-700'}`}>{index + 1}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6">
                        <span className="font-medium">{element.username}</span>
                      </td>
                      <td className="py-3 px-6 font-mono">
                        ₹{element.moneySpent?.toLocaleString() || 0}
                      </td>
                      <td className="py-3 px-6 font-medium">{element.auctionsWon}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Leaderboard;
