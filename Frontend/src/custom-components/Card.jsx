// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Card = ({ imgSrc, title, startingBid, startTime, endTime, id }) => {
//   const calculateTimeLeft = () => {
//     const now = new Date();
//     const startDifference = new Date(startTime) - now;
//     const endDifference = new Date(endTime) - now;
//     let timeLeft = {};

//     if (startDifference > 0) {
//       timeLeft = {
//         type: "Starts In:",
//         days: Math.floor(startDifference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((startDifference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((startDifference / 1000 / 60) % 60),
//         seconds: Math.floor((startDifference / 1000) % 60),
//       };
//     } else if (endDifference > 0) {
//       timeLeft = {
//         type: "Ends In:",
//         days: Math.floor(endDifference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((endDifference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((endDifference / 1000 / 60) % 60),
//         seconds: Math.floor((endDifference / 1000) % 60),
//       };
//     }
//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     });
//     return () => clearTimeout(timer);
//   }, [timeLeft]);

//   const formatTimeLeft = ({ days, hours, minutes, seconds }) => {
//     const pad = (num) => String(num).padStart(2, "0");
//     return `(${days} Days) ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
//   };

//   return (
//     <>
//       <Link
//         to={`/auction/item/${id}`}
//         className="flex-grow basis-full bg-white rounded-md group sm:basis-56 lg:basis-60 2xl:basis-80"
//       >
//         <img
//           src={imgSrc}
//           alt={title}
//           className="w-full aspect-[4/3] m-auto md:p-12"
//         />
//         <div className="px-2 pt-4 pb-2">
//           <h5 className="font-semibold text-[18px] group-hover:text-[#d6482b] mb-2">
//             {title}
//           </h5>
//           {startingBid && (
//             <p className="text-stone-600 font-light">
//               Starting Bid:{" "}
//               <span className="text-[#fdba88] font-bold ml-1">
//                 {startingBid}
//               </span>
//             </p>
//           )}
//           <p className="text-stone-600 font-light">
//             {timeLeft.type}
//             {Object.keys(timeLeft).length > 1 ? (
//               <span className="text-[#fdba88] font-bold ml-1">
//                 {formatTimeLeft(timeLeft)}
//               </span>
//             ) : (
//               <span className="text-[#fdba88] font-bold ml-1">Time's up!</span>
//             )}
//           </p>
//         </div>
//       </Link>
//     </>
//   );
// };

// export default Card;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiClock, FiUsers } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import { format } from "date-fns";

const Card = ({
  title,
  startTime,
  endTime,
  imgSrc,
  startingBid,
  currentBid,
  bidsCount = 0,
  id,
}) => {
  const [timeLeft, setTimeLeft] = useState("");
  const [status, setStatus] = useState("LIVE");

  const updateTimeLeft = () => {
    const now = new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (now < start) {
      const diff = start - now;
      setStatus("UPCOMING");
      setTimeLeft(formatTime(diff));
    } else if (now >= start && now <= end) {
      const diff = end - now;
      setStatus("LIVE");
      setTimeLeft(formatTime(diff));
    } else {
      setStatus("CLOSED");
      setTimeLeft("Ended");
    }
  };

  const formatTime = (diff) => {
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m left`;
  };

  useEffect(() => {
    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 60000); // update every 60s
    return () => clearInterval(interval);
  }, []);

  return (
    <Link to={`/auction/item/${id}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full cursor-pointer">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={imgSrc || "/default-auction.jpg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h3 className="text-white font-bold text-xl truncate">{title}</h3>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
            <FiClock className="flex-shrink-0" />
            <span className="font-medium">
              {format(new Date(startTime), "MMM dd, yyyy HH:mm")} -{" "}
              {format(new Date(endTime), "HH:mm")}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MdCurrencyRupee className="text-green-500" />
                <span className="font-semibold">Current Bid:</span>
              </div>
              <span className="font-bold text-lg">
                ₹{currentBid?.toLocaleString() || startingBid?.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FiUsers className="text-blue-500" />
                <span className="font-semibold">Bids:</span>
              </div>
              <span className="font-bold text-lg">{bidsCount}</span>
            </div>
          </div>

          {/* Time Left Badge */}
          <div className="mt-4 flex justify-between items-center bg-orange-50 p-2 rounded-lg">
            <span className="text-sm font-semibold text-orange-600">
              {timeLeft}
            </span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-bold ${
                status === "LIVE"
                  ? "bg-green-500 text-white"
                  : status === "UPCOMING"
                  ? "bg-blue-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {status}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
