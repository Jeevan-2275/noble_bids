// import Card from "@/custom-components/Card";
// import Spinner from "@/custom-components/Spinner";
// import React from "react";
// import { useSelector } from "react-redux";

// const Auctions = () => {
//   const { allAuctions, loading } = useSelector((state) => state.auction);
//   return (
//     <>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <article className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
//           <section className="my-8">
//             <h1
//               className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
//             >
//               Auctions
//             </h1>
//             <div className="flex flex-wrap gap-6">
//               {allAuctions.map((element) => (
//                 <Card
//                   title={element.title}
//                   startTime={element.startTime}
//                   endTime={element.endTime}
//                   imgSrc={element.image?.url}
//                   startingBid={element.startingBid}
//                   id={element._id}
//                   key={element._id}
//                 />
//               ))}
//             </div>
//           </section>
//         </article>
//       )}
//     </>
//   );
// };

// export default Auctions;









import Card from "@/custom-components/Card";
import Spinner from "@/custom-components/Spinner";
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { GiHammerDrop } from "react-icons/gi";
import { FiClock, FiDollarSign } from "react-icons/fi";

const Auctions = () => {
  const { allAuctions, loading } = useSelector((state) => state.auction);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <article className="max-w-7xl mx-auto py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#d6482b] to-orange-600 bg-clip-text text-transparent mb-8"
          >
            <GiHammerDrop className="inline-block mr-4 mb-2" />
            Live Auctions
          </motion.h1>

          {allAuctions.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4 text-gray-300">
                <GiHammerDrop className="inline-block" />
              </div>
              <h2 className="text-2xl text-gray-500">No active auctions found</h2>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4"
            >
              {allAuctions.map((auction) => (
                <motion.div
                  key={auction._id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Card
                    title={auction.title}
                    startTime={auction.startTime}
                    endTime={auction.endTime}
                    imgSrc={auction.image?.url}
                    startingBid={auction.startingBid}
                    id={auction._id}
                    currentBid={auction.currentBid}
                    bidsCount={auction.bids.length}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </article>
      )}
    </div>
  );
};

export default Auctions;
