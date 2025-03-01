// import CardTwo from "@/custom-components/CardTwo";
// import Spinner from "@/custom-components/Spinner";
// import { getMyAuctionItems } from "@/store/slices/auctionSlice";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const ViewMyAuctions = () => {
//   const { myAuctions, loading } = useSelector((state) => state.auction);
//   const { user, isAuthenticated } = useSelector((state) => state.user);

//   const dispatch = useDispatch();
//   const navigateTo = useNavigate();

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== "Auctioneer") {
//       navigateTo("/");
//     }
//     dispatch(getMyAuctionItems());
//   }, [dispatch, isAuthenticated]);

//   return (
//     <>
//       <div className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
//         <h1
//           className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
//         >
//           My Auctions
//         </h1>
//         {loading ? (
//           <Spinner />
//         ) : (
//           <div
//             className={`${
//               myAuctions.length > 2 && "flex-grow"
//             } flex flex-wrap gap-6`}
//           >
//             {myAuctions.length > 0 ? (
//               myAuctions.map((element) => {
//                 return (
//                   <CardTwo
//                     title={element.title}
//                     startingBid={element.startingBid}
//                     endTime={element.endTime}
//                     startTime={element.startTime}
//                     imgSrc={element.image?.url}
//                     id={element._id}
//                     key={element._id}
//                   />
//                 );
//               })
//             ) : (
//               <h3 className="text-[#666] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl mt-5">
//                 You have not posted any auction.
//               </h3>
//             )}{" "}
//             :
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ViewMyAuctions;







import CardTwo from "@/custom-components/CardTwo";
import Spinner from "@/custom-components/Spinner";
import { getMyAuctionItems } from "@/store/slices/auctionSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaHammer, FaBoxOpen } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ViewMyAuctions = () => {
  const { myAuctions, loading, error } = useSelector((state) => state.auction);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || user?.role !== "Auctioneer") {
      navigate("/");
    }
    dispatch(getMyAuctionItems());
  }, [dispatch, isAuthenticated, user?.role, navigate]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full px-5 pt-20 lg:pl-[320px] min-h-screen bg-gray-50"
    >
      <div className="max-w-7xl mx-auto p-6">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-[#D6482B] mb-8 flex items-center gap-3"
        >
          <FaHammer className="text-3xl" />
          My Auctions
        </motion.h1>

        {error && (
          <div className="p-4 mb-6 bg-red-100 text-red-700 rounded-lg">
            Error loading auctions: {error}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Skeleton
                  height={300}
                  className="rounded-xl"
                  baseColor="#f3f4f6"
                  highlightColor="#e5e7eb"
                />
                <Skeleton count={3} className="mt-2" />
              </motion.div>
            ))}
          </div>
        ) : (
          <AnimatePresence>
            {myAuctions.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {myAuctions.map((auction) => (
                  <motion.div
                    key={auction._id}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CardTwo
                      title={auction.title}
                      startingBid={auction.startingBid}
                      endTime={auction.endTime}
                      startTime={auction.startTime}
                      imgSrc={auction.image?.url}
                      id={auction._id}
                      currentBid={auction.currentBid}
                      status={auction.status}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center min-h-[400px] text-center"
              >
                <FaBoxOpen className="text-6xl text-gray-400 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  No Auctions Found
                </h3>
                <p className="text-gray-500 max-w-md">
                  You haven't created any auctions yet. Start by clicking the
                  "Create Auction" button above to list your first item!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
};

export default ViewMyAuctions;